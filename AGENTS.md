# Agent Notes: Order Lifecycle

This document describes the order state machine implemented in the `cafecitos` backend.

## Order States

| State (DB value) | UI Label (Spanish) | Who sets it | Valid previous state | Trigger / Endpoint |
|------------------|--------------------|-------------|----------------------|--------------------|
| `OPEN`           | Abierto            | `WAITER`, `IN_CHARGE`, or `ADMINISTRATOR` | — (new order) | `POST /api/orders` |
| `CLOSED`         | Cerrado            | `WAITER` (own order only), `IN_CHARGE`, or `ADMINISTRATOR` | `OPEN` | `PATCH /api/orders/{id}/status/CLOSED` |
| `PAID`           | Pagado             | `IN_CHARGE` or `ADMINISTRATOR` | `CLOSED` | `PATCH /api/orders/{id}/status/PAID` |
| `COMMISSIONING`  | En comisión        | `ADMINISTRATOR` | `PAID` | `GET /api/orders/move-to-commissiong` |
| `PROCESSED`      | Procesado          | `ADMINISTRATOR` | `COMMISSIONING` | `GET /api/orders/move-to-processed` |
| `VOIDED`         | Anulado            | `ADMINISTRATOR` (or `IN_CHARGE` under some conditions) | `CLOSED`, `PAID`, or `COMMISSIONING` | `PATCH /api/orders/{id}/status/VOIDED` |

## Side Effects on Transitions

- `OPEN -> CLOSED`: `OrdersService::calculateTotals($id)` is called. `price_final` is computed from the sum of `ORDER_DETAILS.price`.
- `CLOSED -> PAID`: `OrdersService::calculateComisions($id)` is called. Waiter commissions are calculated and persisted in `ORDER_WAITERS.comision`.
- `PAID -> COMMISSIONING`: Batch operation. All `PAID` orders are moved to `COMMISSIONING` at once.
- `COMMISSIONING -> PROCESSED`: Batch operation. All `COMMISSIONING` orders are moved to `PROCESSED` at once.

## What does `COMMISSIONING` mean?

**`COMMISSIONING`** ("En comisión") is used to calculate/assign waiter commissions. It is reached after an `ADMINISTRATOR` runs `GET /api/orders/move-to-commissiong`, which moves every `PAID` order to `COMMISSIONING` in bulk.

> This state is **not** related to kitchen preparation. The system does not currently have a dedicated "in preparation" state.

## Authorization Summary

- `WAITER`: Can create orders, close their own orders.
- `IN_CHARGE`: Can create orders, close any order, pay orders, and void some orders.
- `ADMINISTRATOR`: Can do everything, including the batch moves to `COMMISSIONING` and `PROCESSED`.

## Known Inconsistency

`Controller::validateStatus()` references a state called `COMISSIONED`, but the real database value used by the service and query layer is `COMMISSIONING`. Always use `COMMISSIONING` in new code and tests.
