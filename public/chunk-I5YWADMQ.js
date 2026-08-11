import {
  PlusIcon,
  Tooltip,
  TooltipModule
} from "./chunk-RQV6GEFR.js";
import {
  DomSanitizer,
  Message,
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-5CMSTRG7.js";
import {
  Badge,
  BadgeModule,
  BaseComponent,
  BaseIcon,
  BaseStyle,
  Button,
  CommonModule,
  ConnectedOverlayScrollHandler,
  D,
  DomHandler,
  HttpClient,
  HttpEventType,
  I,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  O,
  OverlayService,
  PrimeTemplate,
  Ripple,
  SharedModule,
  TimesIcon,
  TranslationKeys,
  W,
  Y,
  Yt,
  bt,
  isPlatformBrowser,
  s2 as s,
  style as style2,
  z,
  zindexutils
} from "./chunk-6JBQ36YE.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Inject,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Pipe,
  ViewChild,
  ViewEncapsulation,
  animate,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  input,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  style,
  transition,
  trigger,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵpureFunction8,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-LDLKK7HI.js";

// node_modules/@primeuix/styles/dist/menu/index.mjs
var style3 = "\n    .p-menu {\n        background: dt('menu.background');\n        color: dt('menu.color');\n        border: 1px solid dt('menu.border.color');\n        border-radius: dt('menu.border.radius');\n        min-width: 12.5rem;\n    }\n\n    .p-menu-list {\n        margin: 0;\n        padding: dt('menu.list.padding');\n        outline: 0 none;\n        list-style: none;\n        display: flex;\n        flex-direction: column;\n        gap: dt('menu.list.gap');\n    }\n\n    .p-menu-item-content {\n        transition:\n            background dt('menu.transition.duration'),\n            color dt('menu.transition.duration');\n        border-radius: dt('menu.item.border.radius');\n        color: dt('menu.item.color');\n    }\n\n    .p-menu-item-link {\n        cursor: pointer;\n        display: flex;\n        align-items: center;\n        text-decoration: none;\n        overflow: hidden;\n        position: relative;\n        color: inherit;\n        padding: dt('menu.item.padding');\n        gap: dt('menu.item.gap');\n        user-select: none;\n        outline: 0 none;\n    }\n\n    .p-menu-item-label {\n        line-height: 1;\n    }\n\n    .p-menu-item-icon {\n        color: dt('menu.item.icon.color');\n    }\n\n    .p-menu-item.p-focus .p-menu-item-content {\n        color: dt('menu.item.focus.color');\n        background: dt('menu.item.focus.background');\n    }\n\n    .p-menu-item.p-focus .p-menu-item-icon {\n        color: dt('menu.item.icon.focus.color');\n    }\n\n    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {\n        color: dt('menu.item.focus.color');\n        background: dt('menu.item.focus.background');\n    }\n\n    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {\n        color: dt('menu.item.icon.focus.color');\n    }\n\n    .p-menu-overlay {\n        box-shadow: dt('menu.shadow');\n    }\n\n    .p-menu-submenu-label {\n        background: dt('menu.submenu.label.background');\n        padding: dt('menu.submenu.label.padding');\n        color: dt('menu.submenu.label.color');\n        font-weight: dt('menu.submenu.label.font.weight');\n    }\n\n    .p-menu-separator {\n        border-block-start: 1px solid dt('menu.separator.border.color');\n    }\n";

// node_modules/primeng/fesm2022/primeng-menu.mjs
var _c0 = ["pMenuItemContent", ""];
var _c1 = (a0) => ({
  $implicit: a0
});
var _c2 = () => ({
  exact: false
});
var _c3 = (a0) => ({
  item: a0
});
function MenuItemContent_ng_container_1_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MenuItemContent_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6);
    \u0275\u0275template(1, MenuItemContent_ng_container_1_a_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const itemContent_r3 = \u0275\u0275reference(4);
    \u0275\u0275classMap(ctx_r1.cx("itemLink"));
    \u0275\u0275property("target", ctx_r1.item.target);
    \u0275\u0275attribute("title", ctx_r1.item.title)("href", ctx_r1.item.url || null, \u0275\u0275sanitizeUrl)("data-automationid", ctx_r1.item.automationId)("tabindex", -1)("data-pc-section", "action");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemContent_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(10, _c1, ctx_r1.item));
  }
}
function MenuItemContent_ng_container_1_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function MenuItemContent_ng_container_1_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275template(1, MenuItemContent_ng_container_1_a_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    const itemContent_r3 = \u0275\u0275reference(4);
    \u0275\u0275classMap(ctx_r1.cx("itemLink"));
    \u0275\u0275property("routerLink", ctx_r1.item.routerLink)("queryParams", ctx_r1.item.queryParams)("routerLinkActiveOptions", ctx_r1.item.routerLinkActiveOptions || \u0275\u0275pureFunction0(18, _c2))("target", ctx_r1.item.target)("fragment", ctx_r1.item.fragment)("queryParamsHandling", ctx_r1.item.queryParamsHandling)("preserveFragment", ctx_r1.item.preserveFragment)("skipLocationChange", ctx_r1.item.skipLocationChange)("replaceUrl", ctx_r1.item.replaceUrl)("state", ctx_r1.item.state);
    \u0275\u0275attribute("data-automationid", ctx_r1.item.automationId)("tabindex", -1)("data-pc-section", "action")("title", ctx_r1.item.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemContent_r3)("ngTemplateOutletContext", \u0275\u0275pureFunction1(19, _c1, ctx_r1.item));
  }
}
function MenuItemContent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MenuItemContent_ng_container_1_a_1_Template, 2, 12, "a", 4)(2, MenuItemContent_ng_container_1_a_2_Template, 2, 21, "a", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r1.item == null ? null : ctx_r1.item.routerLink));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.item == null ? null : ctx_r1.item.routerLink);
  }
}
function MenuItemContent_ng_container_2_1_ng_template_0_Template(rf, ctx) {
}
function MenuItemContent_ng_container_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MenuItemContent_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function MenuItemContent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, MenuItemContent_ng_container_2_1_Template, 1, 0, null, 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c1, ctx_r1.item));
  }
}
function MenuItemContent_ng_template_3_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleMap(ctx_r1.item.iconStyle);
    \u0275\u0275classMap(ctx_r1.cx("itemIcon", \u0275\u0275pureFunction1(4, _c3, ctx_r1.item)));
  }
}
function MenuItemContent_ng_template_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("itemLabel"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.item.label);
  }
}
function MenuItemContent_ng_template_3_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", ctx_r1.sanitizeHtml(ctx_r1.item.label), \u0275\u0275sanitizeHtml);
  }
}
function MenuItemContent_ng_template_3_p_badge_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-badge", 13);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("styleClass", ctx_r1.item.badgeStyleClass)("value", ctx_r1.item.badge);
  }
}
function MenuItemContent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MenuItemContent_ng_template_3_span_0_Template, 1, 6, "span", 9)(1, MenuItemContent_ng_template_3_span_1_Template, 2, 3, "span", 10)(2, MenuItemContent_ng_template_3_ng_template_2_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(4, MenuItemContent_ng_template_3_p_badge_4_Template, 1, 2, "p-badge", 11);
  }
  if (rf & 2) {
    const htmlLabel_r4 = \u0275\u0275reference(3);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", ctx_r1.item.icon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.item.escape !== false)("ngIfElse", htmlLabel_r4);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.item.badge);
  }
}
var _c4 = ["start"];
var _c5 = ["end"];
var _c6 = ["header"];
var _c7 = ["item"];
var _c8 = ["submenuheader"];
var _c9 = ["list"];
var _c10 = ["container"];
var _c11 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c12 = (a0) => ({
  value: "visible",
  params: a0
});
var _c13 = (a0, a1) => ({
  item: a0,
  id: a1
});
function Menu_div_0_div_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Menu_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Menu_div_0_div_2_ng_container_1_Template, 1, 0, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("start"));
    \u0275\u0275attribute("data-pc-section", "start");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.startTemplate ?? ctx_r1._startTemplate);
  }
}
function Menu_div_0_5_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("separator"));
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const submenu_r3 = \u0275\u0275nextContext(3).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(submenu_r3.label);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 16);
  }
  if (rf & 2) {
    const submenu_r3 = \u0275\u0275nextContext(3).$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("innerHTML", ctx_r1.sanitizeHtml(submenu_r3.label), \u0275\u0275sanitizeHtml);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Menu_div_0_5_ng_template_0_li_1_ng_container_1_span_1_Template, 2, 1, "span", 15)(2, Menu_div_0_5_ng_template_0_li_1_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const htmlSubmenuLabel_r4 = \u0275\u0275reference(3);
    const submenu_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", submenu_r3.escape !== false)("ngIfElse", htmlSubmenuLabel_r4);
  }
}
function Menu_div_0_5_ng_template_0_li_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Menu_div_0_5_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 13);
    \u0275\u0275template(1, Menu_div_0_5_ng_template_0_li_1_ng_container_1_Template, 4, 2, "ng-container", 7)(2, Menu_div_0_5_ng_template_0_li_1_ng_container_2_Template, 1, 0, "ng-container", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    const submenu_r3 = ctx_r4.$implicit;
    const i_r6 = ctx_r4.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("submenuLabel"));
    \u0275\u0275property("tooltipOptions", submenu_r3.tooltipOptions);
    \u0275\u0275attribute("data-automationid", submenu_r3.automationId)("id", ctx_r1.menuitemId(submenu_r3, ctx_r1.id, i_r6));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submenuHeaderTemplate && !ctx_r1._submenuHeaderTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.submenuHeaderTemplate ?? ctx_r1._submenuHeaderTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(8, _c1, submenu_r3));
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275classMap(ctx_r1.cx("separator"));
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 18);
    \u0275\u0275listener("onMenuItemClick", function Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template_li_onMenuItemClick_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r7 = \u0275\u0275nextContext();
      const item_r9 = ctx_r7.$implicit;
      const j_r10 = ctx_r7.index;
      const i_r6 = \u0275\u0275nextContext().index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.itemClick($event, ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    const item_r9 = ctx_r7.$implicit;
    const j_r10 = ctx_r7.index;
    const i_r6 = \u0275\u0275nextContext().index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleMap(item_r9.style);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("item", \u0275\u0275pureFunction2(13, _c13, item_r9, ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10))), item_r9 == null ? null : item_r9.styleClass));
    \u0275\u0275property("pMenuItemContent", item_r9)("itemTemplate", ctx_r1.itemTemplate ?? ctx_r1._itemTemplate)("tooltipOptions", item_r9.tooltipOptions);
    \u0275\u0275attribute("data-pc-section", "menuitem")("aria-label", ctx_r1.label(item_r9.label))("data-p-focused", ctx_r1.isItemFocused(ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10)))("data-p-disabled", ctx_r1.disabled(item_r9.disabled))("aria-disabled", ctx_r1.disabled(item_r9.disabled))("id", ctx_r1.menuitemId(item_r9, ctx_r1.id, i_r6, j_r10));
  }
}
function Menu_div_0_5_ng_template_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_div_0_5_ng_template_0_ng_template_2_li_0_Template, 1, 2, "li", 10)(1, Menu_div_0_5_ng_template_0_ng_template_2_li_1_Template, 1, 16, "li", 17);
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const submenu_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngIf", item_r9.separator && (item_r9.visible !== false || submenu_r3.visible !== false));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r9.separator && item_r9.visible !== false && (item_r9.visible !== void 0 || submenu_r3.visible !== false));
  }
}
function Menu_div_0_5_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_div_0_5_ng_template_0_li_0_Template, 1, 2, "li", 10)(1, Menu_div_0_5_ng_template_0_li_1_Template, 3, 10, "li", 11)(2, Menu_div_0_5_ng_template_0_ng_template_2_Template, 2, 2, "ng-template", 9);
  }
  if (rf & 2) {
    const submenu_r3 = ctx.$implicit;
    \u0275\u0275property("ngIf", submenu_r3.separator && submenu_r3.visible !== false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !submenu_r3.separator);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", submenu_r3.items);
  }
}
function Menu_div_0_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_div_0_5_ng_template_0_Template, 3, 3, "ng-template", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", ctx_r1.model);
  }
}
function Menu_div_0_6_ng_template_0_li_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.cx("separator"));
  }
}
function Menu_div_0_6_ng_template_0_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 20);
    \u0275\u0275listener("onMenuItemClick", function Menu_div_0_6_ng_template_0_li_1_Template_li_onMenuItemClick_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r11 = \u0275\u0275nextContext();
      const item_r13 = ctx_r11.$implicit;
      const i_r14 = ctx_r11.index;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.itemClick($event, ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14)));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r11 = \u0275\u0275nextContext();
    const item_r13 = ctx_r11.$implicit;
    const i_r14 = ctx_r11.index;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("item", \u0275\u0275pureFunction2(12, _c13, item_r13, ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14))), item_r13 == null ? null : item_r13.styleClass));
    \u0275\u0275property("pMenuItemContent", item_r13)("itemTemplate", ctx_r1.itemTemplate ?? ctx_r1._itemTemplate)("ngStyle", item_r13.style)("tooltipOptions", item_r13.tooltipOptions);
    \u0275\u0275attribute("data-pc-section", "menuitem")("aria-label", ctx_r1.label(item_r13.label))("data-p-focused", ctx_r1.isItemFocused(ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14)))("data-p-disabled", ctx_r1.disabled(item_r13.disabled))("aria-disabled", ctx_r1.disabled(item_r13.disabled))("id", ctx_r1.menuitemId(item_r13, ctx_r1.id, i_r14));
  }
}
function Menu_div_0_6_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_div_0_6_ng_template_0_li_0_Template, 1, 2, "li", 10)(1, Menu_div_0_6_ng_template_0_li_1_Template, 1, 15, "li", 19);
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    \u0275\u0275property("ngIf", item_r13.separator && item_r13.visible !== false);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r13.separator && item_r13.visible !== false);
  }
}
function Menu_div_0_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Menu_div_0_6_ng_template_0_Template, 2, 2, "ng-template", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngForOf", ctx_r1.model);
  }
}
function Menu_div_0_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Menu_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, Menu_div_0_div_7_ng_container_1_Template, 1, 0, "ng-container", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r1.cx("end"));
    \u0275\u0275attribute("data-pc-section", "end");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.endTemplate ?? ctx_r1._endTemplate);
  }
}
function Menu_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4, 0);
    \u0275\u0275listener("click", function Menu_div_0_Template_div_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayClick($event));
    })("@overlayAnimation.start", function Menu_div_0_Template_div_animation_overlayAnimation_start_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayAnimationStart($event));
    })("@overlayAnimation.done", function Menu_div_0_Template_div_animation_overlayAnimation_done_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onOverlayAnimationEnd($event));
    });
    \u0275\u0275template(2, Menu_div_0_div_2_Template, 2, 4, "div", 5);
    \u0275\u0275elementStart(3, "ul", 6, 1);
    \u0275\u0275listener("focus", function Menu_div_0_Template_ul_focus_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onListFocus($event));
    })("blur", function Menu_div_0_Template_ul_blur_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onListBlur($event));
    })("keydown", function Menu_div_0_Template_ul_keydown_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onListKeyDown($event));
    });
    \u0275\u0275template(5, Menu_div_0_5_Template, 1, 1, null, 7)(6, Menu_div_0_6_Template, 1, 1, null, 7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, Menu_div_0_div_7_Template, 2, 4, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleMap(ctx_r1.sx("root"));
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    \u0275\u0275property("ngStyle", ctx_r1.style)("@overlayAnimation", \u0275\u0275pureFunction1(24, _c12, \u0275\u0275pureFunction2(21, _c11, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("@.disabled", ctx_r1.popup !== true);
    \u0275\u0275attribute("data-pc-name", "menu")("id", ctx_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.startTemplate ?? ctx_r1._startTemplate);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("list"));
    \u0275\u0275attribute("id", ctx_r1.id + "_list")("tabindex", ctx_r1.getTabIndexValue())("data-pc-section", "menu")("aria-activedescendant", ctx_r1.activedescendant())("aria-label", ctx_r1.ariaLabel)("aria-labelledBy", ctx_r1.ariaLabelledBy);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.hasSubMenu());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.hasSubMenu());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.endTemplate ?? ctx_r1._endTemplate);
  }
}
var inlineStyles = {
  root: ({
    instance
  }) => ({
    position: instance.popup ? "absolute" : "relative"
  })
};
var classes = {
  root: ({
    instance
  }) => ["p-menu p-component", {
    "p-menu-overlay": instance.popup
  }],
  start: "p-menu-start",
  list: "p-menu-list",
  submenuLabel: "p-menu-submenu-label",
  separator: "p-menu-separator",
  end: "p-menu-end",
  item: ({
    instance,
    item,
    id
  }) => ["p-menu-item", {
    "p-focus": instance.focusedOptionId() && id === instance.focusedOptionId(),
    "p-disabled": instance.disabled(item.disabled)
  }, item.styleClass],
  itemContent: "p-menu-item-content",
  itemLink: "p-menu-item-link",
  itemIcon: ({
    item
  }) => ["p-menu-item-icon", item.icon, item.iconClass],
  itemLabel: "p-menu-item-label"
};
var MenuStyle = class _MenuStyle extends BaseStyle {
  name = "menu";
  theme = style3;
  classes = classes;
  inlineStyles = inlineStyles;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MenuStyle_BaseFactory;
    return function MenuStyle_Factory(__ngFactoryType__) {
      return (\u0275MenuStyle_BaseFactory || (\u0275MenuStyle_BaseFactory = \u0275\u0275getInheritedFactory(_MenuStyle)))(__ngFactoryType__ || _MenuStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MenuStyle,
    factory: _MenuStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuStyle, [{
    type: Injectable
  }], null, null);
})();
var MenuClasses;
(function(MenuClasses2) {
  MenuClasses2["root"] = "p-menu";
  MenuClasses2["start"] = "p-menu-start";
  MenuClasses2["list"] = "p-menu-list";
  MenuClasses2["submenuItem"] = "p-menu-submenu-item";
  MenuClasses2["separator"] = "p-menu-separator";
  MenuClasses2["end"] = "p-menu-end";
  MenuClasses2["item"] = "p-menu-item";
  MenuClasses2["itemContent"] = "p-menu-item-content";
  MenuClasses2["itemLink"] = "p-menu-item-link";
  MenuClasses2["itemIcon"] = "p-menu-item-icon";
  MenuClasses2["itemLabel"] = "p-menu-item-label";
})(MenuClasses || (MenuClasses = {}));
var SafeHtmlPipe = class _SafeHtmlPipe {
  platformId;
  sanitizer;
  constructor(platformId, sanitizer) {
    this.platformId = platformId;
    this.sanitizer = sanitizer;
  }
  transform(value) {
    if (!value || !isPlatformBrowser(this.platformId)) {
      return value;
    }
    return this.sanitizer.bypassSecurityTrustHtml(value);
  }
  static \u0275fac = function SafeHtmlPipe_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SafeHtmlPipe)(\u0275\u0275directiveInject(PLATFORM_ID, 16), \u0275\u0275directiveInject(DomSanitizer, 16));
  };
  static \u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({
    name: "safeHtml",
    type: _SafeHtmlPipe,
    pure: true
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SafeHtmlPipe, [{
    type: Pipe,
    args: [{
      name: "safeHtml",
      standalone: true
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: DomSanitizer
  }], null);
})();
var MenuItemContent = class _MenuItemContent extends BaseComponent {
  item;
  itemTemplate;
  onMenuItemClick = new EventEmitter();
  menu;
  _componentStyle = inject(MenuStyle);
  constructor(menu) {
    super();
    this.menu = menu;
  }
  onItemClick(event, item) {
    this.onMenuItemClick.emit({
      originalEvent: event,
      item
    });
  }
  static \u0275fac = function MenuItemContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuItemContent)(\u0275\u0275directiveInject(forwardRef(() => Menu)));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MenuItemContent,
    selectors: [["", "pMenuItemContent", ""]],
    inputs: {
      item: [0, "pMenuItemContent", "item"],
      itemTemplate: "itemTemplate"
    },
    outputs: {
      onMenuItemClick: "onMenuItemClick"
    },
    features: [\u0275\u0275ProvidersFeature([MenuStyle]), \u0275\u0275InheritDefinitionFeature],
    attrs: _c0,
    decls: 5,
    vars: 5,
    consts: [["itemContent", ""], ["htmlLabel", ""], [3, "click"], [4, "ngIf"], ["pRipple", "", 3, "class", "target", 4, "ngIf"], ["routerLinkActive", "p-menu-item-link-active", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "class", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["pRipple", "", 3, "target"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["routerLinkActive", "p-menu-item-link-active", "pRipple", "", 3, "routerLink", "queryParams", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], [3, "class", "style", 4, "ngIf"], [3, "class", 4, "ngIf", "ngIfElse"], [3, "styleClass", "value", 4, "ngIf"], [1, "p-menu-item-label", 3, "innerHTML"], [3, "styleClass", "value"]],
    template: function MenuItemContent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2);
        \u0275\u0275listener("click", function MenuItemContent_Template_div_click_0_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onItemClick($event, ctx.item));
        });
        \u0275\u0275template(1, MenuItemContent_ng_container_1_Template, 3, 2, "ng-container", 3)(2, MenuItemContent_ng_container_2_Template, 2, 4, "ng-container", 3)(3, MenuItemContent_ng_template_3_Template, 5, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("itemContent"));
        \u0275\u0275attribute("data-pc-section", "content");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.itemTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.itemTemplate);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, RouterModule, RouterLink, RouterLinkActive, Ripple, TooltipModule, BadgeModule, Badge, SharedModule],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuItemContent, [{
    type: Component,
    args: [{
      selector: "[pMenuItemContent]",
      standalone: true,
      imports: [CommonModule, RouterModule, Ripple, TooltipModule, BadgeModule, SharedModule],
      template: ` <div [class]="cx('itemContent')" (click)="onItemClick($event, item)" [attr.data-pc-section]="'content'">
        <ng-container *ngIf="!itemTemplate">
            <a
                *ngIf="!item?.routerLink"
                [attr.title]="item.title"
                [attr.href]="item.url || null"
                [attr.data-automationid]="item.automationId"
                [attr.tabindex]="-1"
                [attr.data-pc-section]="'action'"
                [class]="cx('itemLink')"
                [target]="item.target"
                pRipple
            >
                <ng-container *ngTemplateOutlet="itemContent; context: { $implicit: item }"></ng-container>
            </a>
            <a
                *ngIf="item?.routerLink"
                [routerLink]="item.routerLink"
                [attr.data-automationid]="item.automationId"
                [attr.tabindex]="-1"
                [attr.data-pc-section]="'action'"
                [attr.title]="item.title"
                [queryParams]="item.queryParams"
                routerLinkActive="p-menu-item-link-active"
                [routerLinkActiveOptions]="item.routerLinkActiveOptions || { exact: false }"
                [class]="cx('itemLink')"
                [target]="item.target"
                [fragment]="item.fragment"
                [queryParamsHandling]="item.queryParamsHandling"
                [preserveFragment]="item.preserveFragment"
                [skipLocationChange]="item.skipLocationChange"
                [replaceUrl]="item.replaceUrl"
                [state]="item.state"
                pRipple
            >
                <ng-container *ngTemplateOutlet="itemContent; context: { $implicit: item }"></ng-container>
            </a>
        </ng-container>

        <ng-container *ngIf="itemTemplate">
            <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: item }"></ng-template>
        </ng-container>

        <ng-template #itemContent>
            <span [class]="cx('itemIcon', { item })" *ngIf="item.icon" [style]="item.iconStyle"></span>
            <span [class]="cx('itemLabel')" *ngIf="item.escape !== false; else htmlLabel">{{ item.label }}</span>
            <ng-template #htmlLabel><span class="p-menu-item-label" [innerHTML]="sanitizeHtml(item.label)"></span></ng-template>
            <p-badge *ngIf="item.badge" [styleClass]="item.badgeStyleClass" [value]="item.badge" />
        </ng-template>
    </div>`,
      encapsulation: ViewEncapsulation.None,
      providers: [MenuStyle]
    }]
  }], () => [{
    type: Menu,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => Menu)]
    }]
  }], {
    item: [{
      type: Input,
      args: ["pMenuItemContent"]
    }],
    itemTemplate: [{
      type: Input
    }],
    onMenuItemClick: [{
      type: Output
    }]
  });
})();
var Menu = class _Menu extends BaseComponent {
  overlayService;
  /**
   * An array of menuitems.
   * @group Props
   */
  model;
  /**
   * Defines if menu would displayed as a popup.
   * @group Props
   */
  popup;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Whether to automatically manage layering.
   * @group Props
   */
  autoZIndex = true;
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = ".12s cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = ".1s linear";
  /**
   * Defines a string value that labels an interactive element.
   * @group Props
   */
  ariaLabel;
  /**
   * Identifier of the underlying input element.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Target element to attach the overlay, valid values are "body" or a local ng-template variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @defaultValue 'self'
   * @group Props
   */
  appendTo = input(void 0, ...ngDevMode ? [{
    debugName: "appendTo"
  }] : []);
  /**
   * Callback to invoke when overlay menu is shown.
   * @group Emits
   */
  onShow = new EventEmitter();
  /**
   * Callback to invoke when overlay menu is hidden.
   * @group Emits
   */
  onHide = new EventEmitter();
  /**
   * Callback to invoke when the list loses focus.
   * @param {Event} event - blur event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Callback to invoke when the list receives focus.
   * @param {Event} event - focus event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  listViewChild;
  containerViewChild;
  $appendTo = computed(() => this.appendTo() || this.config.overlayAppendTo(), ...ngDevMode ? [{
    debugName: "$appendTo"
  }] : []);
  container;
  scrollHandler;
  documentClickListener;
  documentResizeListener;
  preventDocumentDefault;
  target;
  visible;
  focusedOptionId = computed(() => {
    return this.focusedOptionIndex() !== -1 ? this.focusedOptionIndex() : null;
  }, ...ngDevMode ? [{
    debugName: "focusedOptionId"
  }] : []);
  focusedOptionIndex = signal(-1, ...ngDevMode ? [{
    debugName: "focusedOptionIndex"
  }] : []);
  selectedOptionIndex = signal(-1, ...ngDevMode ? [{
    debugName: "selectedOptionIndex"
  }] : []);
  focused = false;
  overlayVisible = false;
  relativeAlign;
  _componentStyle = inject(MenuStyle);
  constructor(overlayService) {
    super();
    this.overlayService = overlayService;
    this.id = this.id || s("pn_id_");
  }
  /**
   * Toggles the visibility of the popup menu.
   * @param {Event} event - Browser event.
   * @group Method
   */
  toggle(event) {
    if (this.visible) this.hide();
    else this.show(event);
    this.preventDocumentDefault = true;
  }
  /**
   * Displays the popup menu.
   * @param {Event} event - Browser event.
   * @group Method
   */
  show(event) {
    this.target = event.currentTarget;
    this.relativeAlign = event.relativeAlign;
    this.visible = true;
    this.preventDocumentDefault = true;
    this.overlayVisible = true;
    this.cd.markForCheck();
  }
  ngOnInit() {
    super.ngOnInit();
    if (!this.popup) {
      this.bindDocumentClickListener();
    }
  }
  /**
   * Defines template option for start.
   * @group Templates
   */
  startTemplate;
  _startTemplate;
  /**
   * Defines template option for end.
   * @group Templates
   */
  endTemplate;
  _endTemplate;
  /**
   * Defines template option for header.
   * @group Templates
   */
  headerTemplate;
  _headerTemplate;
  /**
   * Defines template option for item.
   * @group Templates
   */
  itemTemplate;
  _itemTemplate;
  /**
   * Defines template option for item.
   * @group Templates
   */
  submenuHeaderTemplate;
  _submenuHeaderTemplate;
  templates;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "start":
          this._startTemplate = item.template;
          break;
        case "end":
          this._endTemplate = item.template;
          break;
        case "item":
          this._itemTemplate = item.template;
          break;
        case "submenuheader":
          this._submenuHeaderTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  getTabIndexValue() {
    return this.tabindex !== void 0 ? this.tabindex.toString() : null;
  }
  onOverlayAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        if (this.popup) {
          this.container = event.element;
          this.moveOnTop();
          this.onShow.emit({});
          this.attrSelector && this.container.setAttribute(this.attrSelector, "");
          this.appendOverlay();
          this.alignOverlay();
          this.bindDocumentClickListener();
          this.bindDocumentResizeListener();
          this.bindScrollListener();
          bt(this.listViewChild.nativeElement);
        }
        break;
      case "void":
        this.onOverlayHide();
        this.onHide.emit({});
        break;
    }
  }
  onOverlayAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        if (this.autoZIndex) {
          zindexutils.clear(event.element);
        }
        break;
    }
  }
  alignOverlay() {
    if (this.relativeAlign) I(this.container, this.target);
    else D(this.container, this.target);
  }
  appendOverlay() {
    DomHandler.appendOverlay(this.container, this.$appendTo() === "body" ? this.document.body : this.$appendTo(), this.$appendTo());
  }
  restoreOverlayAppend() {
    if (this.container && this.$appendTo() !== "self") {
      this.renderer.appendChild(this.el.nativeElement, this.container);
    }
  }
  moveOnTop() {
    if (this.autoZIndex) {
      zindexutils.set("menu", this.container, this.baseZIndex + this.config.zIndex.menu);
    }
  }
  /**
   * Hides the popup menu.
   * @group Method
   */
  hide() {
    this.visible = false;
    this.relativeAlign = false;
    this.cd.markForCheck();
  }
  onWindowResize() {
    if (this.visible && !Yt()) {
      this.hide();
    }
  }
  menuitemId(item, id, index, childIndex) {
    return item?.id ?? `${id}_${index}${childIndex !== void 0 ? "_" + childIndex : ""}`;
  }
  isItemFocused(id) {
    return this.focusedOptionId() === id;
  }
  label(label) {
    return typeof label === "function" ? label() : label;
  }
  disabled(disabled) {
    return typeof disabled === "function" ? disabled() : typeof disabled === "undefined" ? false : disabled;
  }
  activedescendant() {
    return this.focused ? this.focusedOptionId() : void 0;
  }
  onListFocus(event) {
    if (!this.focused) {
      this.focused = true;
      !this.popup && this.changeFocusedOptionIndex(0);
      this.onFocus.emit(event);
    }
  }
  onListBlur(event) {
    if (this.focused) {
      this.focused = false;
      this.changeFocusedOptionIndex(-1);
      this.selectedOptionIndex.set(-1);
      this.focusedOptionIndex.set(-1);
      this.onBlur.emit(event);
    }
  }
  onListKeyDown(event) {
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "NumpadEnter":
        this.onEnterKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "Escape":
      case "Tab":
        if (this.popup) {
          bt(this.target);
          this.hide();
        }
        this.overlayVisible && this.hide();
        break;
      default:
        break;
    }
  }
  onArrowDownKey(event) {
    const optionIndex = this.findNextOptionIndex(this.focusedOptionIndex());
    this.changeFocusedOptionIndex(optionIndex);
    event.preventDefault();
  }
  onArrowUpKey(event) {
    if (event.altKey && this.popup) {
      bt(this.target);
      this.hide();
      event.preventDefault();
    } else {
      const optionIndex = this.findPrevOptionIndex(this.focusedOptionIndex());
      this.changeFocusedOptionIndex(optionIndex);
      event.preventDefault();
    }
  }
  onHomeKey(event) {
    this.changeFocusedOptionIndex(0);
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedOptionIndex(Y(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]').length - 1);
    event.preventDefault();
  }
  onEnterKey(event) {
    const element = z(this.containerViewChild.nativeElement, `li[id="${`${this.focusedOptionIndex()}`}"]`);
    const anchorElement = element && z(element, 'a[data-pc-section="action"]');
    this.popup && bt(this.target);
    anchorElement ? anchorElement.click() : element && element.click();
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  findNextOptionIndex(index) {
    const links = Y(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    const matchedOptionIndex = [...links].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex + 1 : 0;
  }
  findPrevOptionIndex(index) {
    const links = Y(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    const matchedOptionIndex = [...links].findIndex((link) => link.id === index);
    return matchedOptionIndex > -1 ? matchedOptionIndex - 1 : 0;
  }
  changeFocusedOptionIndex(index) {
    const links = Y(this.containerViewChild.nativeElement, 'li[data-pc-section="menuitem"][data-p-disabled="false"]');
    if (links.length > 0) {
      let order = index >= links.length ? links.length - 1 : index < 0 ? 0 : index;
      order > -1 && this.focusedOptionIndex.set(links[order].getAttribute("id"));
    }
  }
  itemClick(event, id) {
    const {
      originalEvent,
      item
    } = event;
    if (!this.focused) {
      this.focused = true;
      this.onFocus.emit();
    }
    if (item.disabled) {
      originalEvent.preventDefault();
      return;
    }
    if (!item.url && !item.routerLink) {
      originalEvent.preventDefault();
    }
    if (item.command) {
      item.command({
        originalEvent,
        item
      });
    }
    if (this.popup) {
      this.hide();
    }
    if (!this.popup && this.focusedOptionIndex() !== id) {
      this.focusedOptionIndex.set(id);
    }
  }
  onOverlayClick(event) {
    if (this.popup) {
      this.overlayService.add({
        originalEvent: event,
        target: this.el.nativeElement
      });
    }
    this.preventDocumentDefault = true;
  }
  bindDocumentClickListener() {
    if (!this.documentClickListener && isPlatformBrowser(this.platformId)) {
      const documentTarget = this.el ? this.el.nativeElement.ownerDocument : "document";
      this.documentClickListener = this.renderer.listen(documentTarget, "click", (event) => {
        const isOutsideContainer = this.containerViewChild?.nativeElement && !this.containerViewChild?.nativeElement.contains(event.target);
        const isOutsideTarget = !(this.target && (this.target === event.target || this.target.contains(event.target)));
        if (!this.popup && isOutsideContainer && isOutsideTarget) {
          this.onListBlur(event);
        }
        if (this.preventDocumentDefault && this.overlayVisible && isOutsideContainer && isOutsideTarget) {
          this.hide();
          this.preventDocumentDefault = false;
        }
      });
    }
  }
  unbindDocumentClickListener() {
    if (this.documentClickListener) {
      this.documentClickListener();
      this.documentClickListener = null;
    }
  }
  bindDocumentResizeListener() {
    if (!this.documentResizeListener && isPlatformBrowser(this.platformId)) {
      const window2 = this.document.defaultView;
      this.documentResizeListener = this.renderer.listen(window2, "resize", this.onWindowResize.bind(this));
    }
  }
  unbindDocumentResizeListener() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler && isPlatformBrowser(this.platformId)) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.target, () => {
        if (this.visible) {
          this.hide();
        }
      });
    }
    this.scrollHandler?.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
      this.scrollHandler = null;
    }
  }
  onOverlayHide() {
    this.unbindDocumentClickListener();
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.preventDocumentDefault = false;
    if (!this.cd.destroyed) {
      this.target = null;
    }
  }
  ngOnDestroy() {
    if (this.popup) {
      if (this.scrollHandler) {
        this.scrollHandler.destroy();
        this.scrollHandler = null;
      }
      if (this.container && this.autoZIndex) {
        zindexutils.clear(this.container);
      }
      this.restoreOverlayAppend();
      this.onOverlayHide();
    }
    if (!this.popup) {
      this.unbindDocumentClickListener();
    }
    super.ngOnDestroy();
  }
  hasSubMenu() {
    return this.model?.some((item) => item.items) ?? false;
  }
  isItemHidden(item) {
    if (item.separator) {
      return item.visible === false || item.items && item.items.some((subitem) => subitem.visible !== false);
    }
    return item.visible === false;
  }
  static \u0275fac = function Menu_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Menu)(\u0275\u0275directiveInject(OverlayService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Menu,
    selectors: [["p-menu"]],
    contentQueries: function Menu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c4, 4);
        \u0275\u0275contentQuery(dirIndex, _c5, 4);
        \u0275\u0275contentQuery(dirIndex, _c6, 4);
        \u0275\u0275contentQuery(dirIndex, _c7, 4);
        \u0275\u0275contentQuery(dirIndex, _c8, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.startTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.endTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.submenuHeaderTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Menu_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c9, 5);
        \u0275\u0275viewQuery(_c10, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.listViewChild = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    inputs: {
      model: "model",
      popup: [2, "popup", "popup", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      autoZIndex: [2, "autoZIndex", "autoZIndex", booleanAttribute],
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      id: "id",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      appendTo: [1, "appendTo"]
    },
    outputs: {
      onShow: "onShow",
      onHide: "onHide",
      onBlur: "onBlur",
      onFocus: "onFocus"
    },
    features: [\u0275\u0275ProvidersFeature([MenuStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["container", ""], ["list", ""], ["htmlSubmenuLabel", ""], [3, "class", "style", "ngStyle", "click", 4, "ngIf"], [3, "click", "ngStyle"], [3, "class", 4, "ngIf"], ["role", "menu", 3, "focus", "blur", "keydown"], [4, "ngIf"], [4, "ngTemplateOutlet"], ["ngFor", "", 3, "ngForOf"], ["role", "separator", 3, "class", 4, "ngIf"], ["pTooltip", "", "role", "none", 3, "class", "tooltipOptions", 4, "ngIf"], ["role", "separator"], ["pTooltip", "", "role", "none", 3, "tooltipOptions"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfElse"], [3, "innerHTML"], ["pTooltip", "", "role", "menuitem", 3, "class", "pMenuItemContent", "itemTemplate", "style", "tooltipOptions", "onMenuItemClick", 4, "ngIf"], ["pTooltip", "", "role", "menuitem", 3, "onMenuItemClick", "pMenuItemContent", "itemTemplate", "tooltipOptions"], ["pTooltip", "", "role", "menuitem", 3, "class", "pMenuItemContent", "itemTemplate", "ngStyle", "tooltipOptions", "onMenuItemClick", 4, "ngIf"], ["pTooltip", "", "role", "menuitem", 3, "onMenuItemClick", "pMenuItemContent", "itemTemplate", "ngStyle", "tooltipOptions"]],
    template: function Menu_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Menu_div_0_Template, 8, 26, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", !ctx.popup || ctx.visible);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterModule, MenuItemContent, TooltipModule, Tooltip, BadgeModule, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Menu, [{
    type: Component,
    args: [{
      selector: "p-menu",
      standalone: true,
      imports: [CommonModule, RouterModule, MenuItemContent, TooltipModule, BadgeModule, SharedModule],
      template: `
        <div
            #container
            [class]="cn(cx('root'), styleClass)"
            [style]="sx('root')"
            [ngStyle]="style"
            *ngIf="!popup || visible"
            (click)="onOverlayClick($event)"
            [@overlayAnimation]="{
                value: 'visible',
                params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
            }"
            [@.disabled]="popup !== true"
            (@overlayAnimation.start)="onOverlayAnimationStart($event)"
            (@overlayAnimation.done)="onOverlayAnimationEnd($event)"
            [attr.data-pc-name]="'menu'"
            [attr.id]="id"
        >
            <div *ngIf="startTemplate ?? _startTemplate" [class]="cx('start')" [attr.data-pc-section]="'start'">
                <ng-container *ngTemplateOutlet="startTemplate ?? _startTemplate"></ng-container>
            </div>
            <ul
                #list
                [class]="cx('list')"
                role="menu"
                [attr.id]="id + '_list'"
                [attr.tabindex]="getTabIndexValue()"
                [attr.data-pc-section]="'menu'"
                [attr.aria-activedescendant]="activedescendant()"
                [attr.aria-label]="ariaLabel"
                [attr.aria-labelledBy]="ariaLabelledBy"
                (focus)="onListFocus($event)"
                (blur)="onListBlur($event)"
                (keydown)="onListKeyDown($event)"
            >
                <ng-template ngFor let-submenu let-i="index" [ngForOf]="model" *ngIf="hasSubMenu()">
                    <li [class]="cx('separator')" *ngIf="submenu.separator && submenu.visible !== false" role="separator"></li>
                    <li [class]="cx('submenuLabel')" [attr.data-automationid]="submenu.automationId" *ngIf="!submenu.separator" pTooltip [tooltipOptions]="submenu.tooltipOptions" role="none" [attr.id]="menuitemId(submenu, id, i)">
                        <ng-container *ngIf="!submenuHeaderTemplate && !_submenuHeaderTemplate">
                            <span *ngIf="submenu.escape !== false; else htmlSubmenuLabel">{{ submenu.label }}</span>
                            <ng-template #htmlSubmenuLabel><span [innerHTML]="sanitizeHtml(submenu.label)"></span></ng-template>
                        </ng-container>
                        <ng-container *ngTemplateOutlet="submenuHeaderTemplate ?? _submenuHeaderTemplate; context: { $implicit: submenu }"></ng-container>
                    </li>
                    <ng-template ngFor let-item let-j="index" [ngForOf]="submenu.items">
                        <li [class]="cx('separator')" *ngIf="item.separator && (item.visible !== false || submenu.visible !== false)" role="separator"></li>
                        <li
                            [class]="cn(cx('item', { item, id: menuitemId(item, id, i, j) }), item?.styleClass)"
                            *ngIf="!item.separator && item.visible !== false && (item.visible !== undefined || submenu.visible !== false)"
                            [pMenuItemContent]="item"
                            [itemTemplate]="itemTemplate ?? _itemTemplate"
                            [style]="item.style"
                            (onMenuItemClick)="itemClick($event, menuitemId(item, id, i, j))"
                            pTooltip
                            [tooltipOptions]="item.tooltipOptions"
                            role="menuitem"
                            [attr.data-pc-section]="'menuitem'"
                            [attr.aria-label]="label(item.label)"
                            [attr.data-p-focused]="isItemFocused(menuitemId(item, id, i, j))"
                            [attr.data-p-disabled]="disabled(item.disabled)"
                            [attr.aria-disabled]="disabled(item.disabled)"
                            [attr.id]="menuitemId(item, id, i, j)"
                        ></li>
                    </ng-template>
                </ng-template>
                <ng-template ngFor let-item let-i="index" [ngForOf]="model" *ngIf="!hasSubMenu()">
                    <li [class]="cx('separator')" *ngIf="item.separator && item.visible !== false" role="separator"></li>
                    <li
                        [class]="cn(cx('item', { item, id: menuitemId(item, id, i) }), item?.styleClass)"
                        *ngIf="!item.separator && item.visible !== false"
                        [pMenuItemContent]="item"
                        [itemTemplate]="itemTemplate ?? _itemTemplate"
                        [ngStyle]="item.style"
                        (onMenuItemClick)="itemClick($event, menuitemId(item, id, i))"
                        pTooltip
                        [tooltipOptions]="item.tooltipOptions"
                        role="menuitem"
                        [attr.data-pc-section]="'menuitem'"
                        [attr.aria-label]="label(item.label)"
                        [attr.data-p-focused]="isItemFocused(menuitemId(item, id, i))"
                        [attr.data-p-disabled]="disabled(item.disabled)"
                        [attr.aria-disabled]="disabled(item.disabled)"
                        [attr.id]="menuitemId(item, id, i)"
                    ></li>
                </ng-template>
            </ul>
            <div *ngIf="endTemplate ?? _endTemplate" [class]="cx('end')" [attr.data-pc-section]="'end'">
                <ng-container *ngTemplateOutlet="endTemplate ?? _endTemplate"></ng-container>
            </div>
        </div>
    `,
      animations: [trigger("overlayAnimation", [transition(":enter", [style({
        opacity: 0,
        transform: "scaleY(0.8)"
      }), animate("{{showTransitionParams}}")]), transition(":leave", [animate("{{hideTransitionParams}}", style({
        opacity: 0
      }))])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [MenuStyle]
    }]
  }], () => [{
    type: OverlayService
  }], {
    model: [{
      type: Input
    }],
    popup: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    autoZIndex: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["list"]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }],
    startTemplate: [{
      type: ContentChild,
      args: ["start", {
        descendants: false
      }]
    }],
    endTemplate: [{
      type: ContentChild,
      args: ["end", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    submenuHeaderTemplate: [{
      type: ContentChild,
      args: ["submenuheader", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var MenuModule = class _MenuModule {
  static \u0275fac = function MenuModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MenuModule,
    imports: [Menu, SharedModule, SafeHtmlPipe],
    exports: [Menu, SharedModule, SafeHtmlPipe]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Menu, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuModule, [{
    type: NgModule,
    args: [{
      imports: [Menu, SharedModule, SafeHtmlPipe],
      exports: [Menu, SharedModule, SafeHtmlPipe]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-progressbar.mjs
var _c02 = ["content"];
var _c14 = (a0) => ({
  $implicit: a0
});
function ProgressBar_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("display", ctx_r0.value != null && ctx_r0.value !== 0 ? "flex" : "none");
    \u0275\u0275attribute("data-pc-section", "label");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r0.value, "", ctx_r0.unit);
  }
}
function ProgressBar_div_0_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ProgressBar_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div");
    \u0275\u0275template(2, ProgressBar_div_0_div_2_Template, 2, 5, "div", 2)(3, ProgressBar_div_0_ng_container_3_Template, 1, 0, "ng-container", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("value"), ctx_r0.valueStyleClass));
    \u0275\u0275styleProp("width", ctx_r0.value + "%")("display", "flex")("background", ctx_r0.color);
    \u0275\u0275attribute("data-pc-section", "value");
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r0.cx("label"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showValue && !ctx_r0.contentTemplate && !ctx_r0._contentTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.contentTemplate || ctx_r0._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(14, _c14, ctx_r0.value));
  }
}
function ProgressBar_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("value"), ctx_r0.valueStyleClass));
    \u0275\u0275styleProp("background", ctx_r0.color);
    \u0275\u0275attribute("data-pc-section", "value");
  }
}
var classes2 = {
  root: ({
    instance
  }) => ["p-progressbar p-component", {
    "p-progressbar-determinate": instance.mode == "determinate",
    "p-progressbar-indeterminate": instance.mode == "indeterminate"
  }],
  value: "p-progressbar-value",
  label: "p-progressbar-label"
};
var ProgressBarStyle = class _ProgressBarStyle extends BaseStyle {
  name = "progressbar";
  theme = style2;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressBarStyle_BaseFactory;
    return function ProgressBarStyle_Factory(__ngFactoryType__) {
      return (\u0275ProgressBarStyle_BaseFactory || (\u0275ProgressBarStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressBarStyle)))(__ngFactoryType__ || _ProgressBarStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ProgressBarStyle,
    factory: _ProgressBarStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarStyle, [{
    type: Injectable
  }], null, null);
})();
var ProgressBarClasses;
(function(ProgressBarClasses2) {
  ProgressBarClasses2["root"] = "p-progressbar";
  ProgressBarClasses2["value"] = "p-progressbar-value";
  ProgressBarClasses2["label"] = "p-progressbar-label";
})(ProgressBarClasses || (ProgressBarClasses = {}));
var ProgressBar = class _ProgressBar extends BaseComponent {
  /**
   * Current value of the progress.
   * @group Props
   */
  value;
  /**
   * Whether to display the progress bar value.
   * @group Props
   */
  showValue = true;
  /**
   * Style class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the value element.
   * @group Props
   */
  valueStyleClass;
  /**
   * Unit sign appended to the value.
   * @group Props
   */
  unit = "%";
  /**
   * Defines the mode of the progress
   * @group Props
   */
  mode = "determinate";
  /**
   * Color for the background of the progress.
   * @group Props
   */
  color;
  /**
   * Template of the content.
   * @group templates
   */
  contentTemplate;
  _componentStyle = inject(ProgressBarStyle);
  templates;
  _contentTemplate;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
      }
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ProgressBar_BaseFactory;
    return function ProgressBar_Factory(__ngFactoryType__) {
      return (\u0275ProgressBar_BaseFactory || (\u0275ProgressBar_BaseFactory = \u0275\u0275getInheritedFactory(_ProgressBar)))(__ngFactoryType__ || _ProgressBar);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ProgressBar,
    selectors: [["p-progressBar"], ["p-progressbar"], ["p-progress-bar"]],
    contentQueries: function ProgressBar_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c02, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 8,
    hostBindings: function ProgressBar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuemin", 0)("aria-valuenow", ctx.value)("aria-valuemax", 100)("data-pc-name", "progressbar")("data-pc-section", "root")("aria-level", ctx.value + ctx.unit);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      value: [2, "value", "value", numberAttribute],
      showValue: [2, "showValue", "showValue", booleanAttribute],
      styleClass: "styleClass",
      valueStyleClass: "valueStyleClass",
      unit: "unit",
      mode: "mode",
      color: "color"
    },
    features: [\u0275\u0275ProvidersFeature([ProgressBarStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 2,
    consts: [[3, "class", "width", "display", "background", 4, "ngIf"], [3, "class", "background", 4, "ngIf"], [3, "display", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function ProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, ProgressBar_div_0_Template, 4, 16, "div", 0)(1, ProgressBar_div_1_Template, 1, 5, "div", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.mode === "determinate");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "indeterminate");
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBar, [{
    type: Component,
    args: [{
      selector: "p-progressBar, p-progressbar, p-progress-bar",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <div *ngIf="mode === 'determinate'" [class]="cn(cx('value'), valueStyleClass)" [style.width]="value + '%'" [style.display]="'flex'" [style.background]="color" [attr.data-pc-section]="'value'">
            <div [class]="cx('label')">
                <div *ngIf="showValue && !contentTemplate && !_contentTemplate" [style.display]="value != null && value !== 0 ? 'flex' : 'none'" [attr.data-pc-section]="'label'">{{ value }}{{ unit }}</div>
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: value }"></ng-container>
            </div>
        </div>
        <div *ngIf="mode === 'indeterminate'" [class]="cn(cx('value'), valueStyleClass)" [style.background]="color" [attr.data-pc-section]="'value'"></div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [ProgressBarStyle],
      host: {
        "[attr.aria-valuemin]": "0",
        "[attr.aria-valuenow]": "value",
        "[attr.aria-valuemax]": "100",
        "[attr.data-pc-name]": "'progressbar'",
        "[attr.data-pc-section]": "'root'",
        "[attr.aria-level]": "value + unit",
        "[class]": "cn(cx('root'), styleClass)"
      }
    }]
  }], null, {
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showValue: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    valueStyleClass: [{
      type: Input
    }],
    unit: [{
      type: Input
    }],
    mode: [{
      type: Input
    }],
    color: [{
      type: Input
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ProgressBarModule = class _ProgressBarModule {
  static \u0275fac = function ProgressBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProgressBarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ProgressBarModule,
    imports: [ProgressBar, SharedModule],
    exports: [ProgressBar, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ProgressBar, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [ProgressBar, SharedModule],
      exports: [ProgressBar, SharedModule]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-upload.mjs
var _c03 = ["data-p-icon", "upload"];
var UploadIcon = class _UploadIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    super.ngOnInit();
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275UploadIcon_BaseFactory;
    return function UploadIcon_Factory(__ngFactoryType__) {
      return (\u0275UploadIcon_BaseFactory || (\u0275UploadIcon_BaseFactory = \u0275\u0275getInheritedFactory(_UploadIcon)))(__ngFactoryType__ || _UploadIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _UploadIcon,
    selectors: [["", "data-p-icon", "upload"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c03,
    decls: 5,
    vars: 2,
    consts: [["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function UploadIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElementStart(0, "g");
        \u0275\u0275domElement(1, "path", 0);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(2, "defs")(3, "clipPath", 1);
        \u0275\u0275domElement(4, "rect", 2);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275attribute("clip-path", ctx.pathId);
        \u0275\u0275advance(3);
        \u0275\u0275domProperty("id", ctx.pathId);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UploadIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="upload"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.58942 9.82197C6.70165 9.93405 6.85328 9.99793 7.012 10C7.17071 9.99793 7.32234 9.93405 7.43458 9.82197C7.54681 9.7099 7.61079 9.55849 7.61286 9.4V2.04798L9.79204 4.22402C9.84752 4.28011 9.91365 4.32457 9.98657 4.35479C10.0595 4.38502 10.1377 4.40039 10.2167 4.40002C10.2956 4.40039 10.3738 4.38502 10.4467 4.35479C10.5197 4.32457 10.5858 4.28011 10.6413 4.22402C10.7538 4.11152 10.817 3.95902 10.817 3.80002C10.817 3.64102 10.7538 3.48852 10.6413 3.37602L7.45127 0.190618C7.44656 0.185584 7.44176 0.180622 7.43687 0.175736C7.32419 0.063214 7.17136 0 7.012 0C6.85264 0 6.69981 0.063214 6.58712 0.175736C6.58181 0.181045 6.5766 0.186443 6.5715 0.191927L3.38282 3.37602C3.27669 3.48976 3.2189 3.6402 3.22165 3.79564C3.2244 3.95108 3.28746 4.09939 3.39755 4.20932C3.50764 4.31925 3.65616 4.38222 3.81182 4.38496C3.96749 4.3877 4.11814 4.33001 4.23204 4.22402L6.41113 2.04807V9.4C6.41321 9.55849 6.47718 9.7099 6.58942 9.82197ZM11.9952 14H2.02883C1.751 13.9887 1.47813 13.9228 1.22584 13.8061C0.973545 13.6894 0.746779 13.5241 0.558517 13.3197C0.370254 13.1154 0.22419 12.876 0.128681 12.6152C0.0331723 12.3545 -0.00990605 12.0775 0.0019109 11.8V9.40005C0.0019109 9.24092 0.065216 9.08831 0.1779 8.97579C0.290584 8.86326 0.443416 8.80005 0.602775 8.80005C0.762134 8.80005 0.914966 8.86326 1.02765 8.97579C1.14033 9.08831 1.20364 9.24092 1.20364 9.40005V11.8C1.18295 12.0376 1.25463 12.274 1.40379 12.4602C1.55296 12.6463 1.76817 12.7681 2.00479 12.8H11.9952C12.2318 12.7681 12.447 12.6463 12.5962 12.4602C12.7453 12.274 12.817 12.0376 12.7963 11.8V9.40005C12.7963 9.24092 12.8596 9.08831 12.9723 8.97579C13.085 8.86326 13.2378 8.80005 13.3972 8.80005C13.5565 8.80005 13.7094 8.86326 13.8221 8.97579C13.9347 9.08831 13.998 9.24092 13.998 9.40005V11.8C14.022 12.3563 13.8251 12.8996 13.45 13.3116C13.0749 13.7236 12.552 13.971 11.9952 14Z"
                fill="currentColor"
            />
        </svg:g>
        <svg:defs>
            <svg:clipPath [id]="pathId">
                <svg:rect width="14" height="14" fill="white" />
            </svg:clipPath>
        </svg:defs>
    `
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/fileupload/index.mjs
var style4 = "\n    .p-fileupload input[type='file'] {\n        display: none;\n    }\n\n    .p-fileupload-advanced {\n        border: 1px solid dt('fileupload.border.color');\n        border-radius: dt('fileupload.border.radius');\n        background: dt('fileupload.background');\n        color: dt('fileupload.color');\n    }\n\n    .p-fileupload-header {\n        display: flex;\n        align-items: center;\n        padding: dt('fileupload.header.padding');\n        background: dt('fileupload.header.background');\n        color: dt('fileupload.header.color');\n        border-style: solid;\n        border-width: dt('fileupload.header.border.width');\n        border-color: dt('fileupload.header.border.color');\n        border-radius: dt('fileupload.header.border.radius');\n        gap: dt('fileupload.header.gap');\n    }\n\n    .p-fileupload-content {\n        border: 1px solid transparent;\n        display: flex;\n        flex-direction: column;\n        gap: dt('fileupload.content.gap');\n        transition: border-color dt('fileupload.transition.duration');\n        padding: dt('fileupload.content.padding');\n    }\n\n    .p-fileupload-content .p-progressbar {\n        width: 100%;\n        height: dt('fileupload.progressbar.height');\n    }\n\n    .p-fileupload-file-list {\n        display: flex;\n        flex-direction: column;\n        gap: dt('fileupload.filelist.gap');\n    }\n\n    .p-fileupload-file {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        padding: dt('fileupload.file.padding');\n        border-block-end: 1px solid dt('fileupload.file.border.color');\n        gap: dt('fileupload.file.gap');\n    }\n\n    .p-fileupload-file:last-child {\n        border-block-end: 0;\n    }\n\n    .p-fileupload-file-info {\n        display: flex;\n        flex-direction: column;\n        gap: dt('fileupload.file.info.gap');\n    }\n\n    .p-fileupload-file-thumbnail {\n        flex-shrink: 0;\n    }\n\n    .p-fileupload-file-actions {\n        margin-inline-start: auto;\n    }\n\n    .p-fileupload-highlight {\n        border: 1px dashed dt('fileupload.content.highlight.border.color');\n    }\n\n    .p-fileupload-basic .p-message {\n        margin-block-end: dt('fileupload.basic.gap');\n    }\n\n    .p-fileupload-basic-content {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        gap: dt('fileupload.basic.gap');\n    }\n";

// node_modules/primeng/fesm2022/primeng-fileupload.mjs
var _c04 = ["pFileContent", ""];
var _c15 = (a0, a1, a2) => ({
  class: a0,
  file: a1,
  index: a2
});
var _forTrack0 = ($index, $item) => ($item == null ? null : $item.name) + "-" + $index;
function FileContent_For_1_ng_template_10_Conditional_0_0_ng_template_0_Template(rf, ctx) {
}
function FileContent_For_1_ng_template_10_Conditional_0_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileContent_For_1_ng_template_10_Conditional_0_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileContent_For_1_ng_template_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileContent_For_1_ng_template_10_Conditional_0_0_Template, 1, 0, null, 6);
  }
  if (rf & 2) {
    const iconClass_r4 = \u0275\u0275nextContext().class;
    const ctx_r4 = \u0275\u0275nextContext();
    const file_r6 = ctx_r4.$implicit;
    const \u0275$index_1_r2 = ctx_r4.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.fileRemoveIconTemplate())("ngTemplateOutletContext", \u0275\u0275pureFunction3(2, _c15, iconClass_r4, file_r6, \u0275$index_1_r2));
  }
}
function FileContent_For_1_ng_template_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 7);
  }
  if (rf & 2) {
    const iconClass_r4 = \u0275\u0275nextContext().class;
    \u0275\u0275classMap(iconClass_r4);
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function FileContent_For_1_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FileContent_For_1_ng_template_10_Conditional_0_Template, 1, 6)(1, FileContent_For_1_ng_template_10_Conditional_1_Template, 1, 3, ":svg:svg", 5);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.fileRemoveIconTemplate() ? 0 : 1);
  }
}
function FileContent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "img", 2);
    \u0275\u0275elementStart(2, "div")(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "p-badge", 3);
    \u0275\u0275elementStart(8, "div")(9, "p-button", 4);
    \u0275\u0275listener("onClick", function FileContent_For_1_Template_p_button_onClick_9_listener($event) {
      const \u0275$index_1_r2 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onRemoveClick($event, \u0275$index_1_r2));
    });
    \u0275\u0275template(10, FileContent_For_1_ng_template_10_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const file_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.cx("file"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("fileThumbnail"));
    \u0275\u0275property("src", file_r6.objectURL, \u0275\u0275sanitizeUrl)("width", ctx_r2.previewWidth());
    \u0275\u0275attribute("alt", file_r6.name);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("fileInfo"));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("fileName"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(file_r6.name);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("fileSize"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatSize(file_r6.size));
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("pcFileBadge"));
    \u0275\u0275property("value", ctx_r2.badgeValue())("severity", ctx_r2.badgeSeverity());
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r2.cx("fileActions"));
    \u0275\u0275advance();
    \u0275\u0275property("styleClass", ctx_r2.cx("pcFileRemoveButton"));
  }
}
var _c22 = ["file"];
var _c32 = ["header"];
var _c42 = ["content"];
var _c52 = ["toolbar"];
var _c62 = ["chooseicon"];
var _c72 = ["filelabel"];
var _c82 = ["uploadicon"];
var _c92 = ["cancelicon"];
var _c102 = ["empty"];
var _c112 = ["advancedfileinput"];
var _c122 = ["basicfileinput"];
var _c132 = (a0, a1, a2, a3, a4) => ({
  $implicit: a0,
  uploadedFiles: a1,
  chooseCallback: a2,
  clearCallback: a3,
  uploadCallback: a4
});
var _c142 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({
  $implicit: a0,
  uploadedFiles: a1,
  chooseCallback: a2,
  clearCallback: a3,
  removeUploadedFileCallback: a4,
  removeFileCallback: a5,
  progress: a6,
  messages: a7
});
var _c152 = (a0) => ({
  $implicit: a0
});
function FileUpload_div_0_ng_container_4_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r1.chooseIcon);
    \u0275\u0275attribute("aria-label", true)("data-pc-section", "chooseicon");
  }
}
function FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 15);
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", true)("data-pc-section", "chooseicon");
  }
}
function FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1_span_2_1_Template, 1, 0, null, 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275attribute("aria-label", true)("data-pc-section", "chooseicon");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.chooseIconTemplate || ctx_r1._chooseIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1__svg_svg_1_Template, 1, 2, "svg", 14)(2, FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1_span_2_Template, 2, 3, "span", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.chooseIconTemplate && !ctx_r1._chooseIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.chooseIconTemplate || ctx_r1._chooseIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_ng_container_4_ng_template_4_span_0_Template, 1, 4, "span", 5)(1, FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1_Template, 3, 2, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.chooseIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.chooseIcon);
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngClass", ctx_r1.uploadIcon);
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 20);
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1_span_2_1_Template, 1, 0, null, 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.uploadIconTemplate || ctx_r1._uploadIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1__svg_svg_1_Template, 1, 0, "svg", 19)(2, FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1_span_2_Template, 2, 2, "span", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.uploadIconTemplate && !ctx_r1._uploadIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.uploadIconTemplate || ctx_r1._uploadIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_span_0_Template, 1, 2, "span", 17)(1, FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1_Template, 3, 2, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngIf", ctx_r1.uploadIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.uploadIcon);
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 16);
    \u0275\u0275listener("onClick", function FileUpload_div_0_ng_container_4_p_button_6_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.upload());
    });
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", ctx_r1.uploadButtonLabel)("disabled", !ctx_r1.hasFiles() || ctx_r1.isFileLimitExceeded())("styleClass", ctx_r1.cn(ctx_r1.cx("pcUploadButton"), ctx_r1.uploadStyleClass))("buttonProps", ctx_r1.uploadButtonProps);
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 18);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngClass", ctx_r1.cancelIcon);
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 22);
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-hidden", true);
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1_span_2_1_Template, 1, 0, null, 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(6);
    \u0275\u0275attribute("aria-hidden", true);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.cancelIconTemplate || ctx_r1._cancelIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1__svg_svg_1_Template, 1, 1, "svg", 21)(2, FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1_span_2_Template, 2, 2, "span", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.cancelIconTemplate && !ctx_r1._cancelIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.cancelIconTemplate || ctx_r1._cancelIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_span_0_Template, 1, 1, "span", 17)(1, FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1_Template, 3, 2, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngIf", ctx_r1.cancelIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.cancelIcon);
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 16);
    \u0275\u0275listener("onClick", function FileUpload_div_0_ng_container_4_p_button_7_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275template(1, FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("label", ctx_r1.cancelButtonLabel)("disabled", !ctx_r1.hasFiles() || ctx_r1.uploading)("styleClass", ctx_r1.cn(ctx_r1.cx("pcCancelButton"), ctx_r1.cancelStyleClass))("buttonProps", ctx_r1.cancelButtonProps);
  }
}
function FileUpload_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p-button", 12);
    \u0275\u0275listener("focus", function FileUpload_div_0_ng_container_4_Template_p_button_focus_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFocus());
    })("blur", function FileUpload_div_0_ng_container_4_Template_p_button_blur_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onBlur());
    })("onClick", function FileUpload_div_0_ng_container_4_Template_p_button_onClick_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.choose());
    })("keydown.enter", function FileUpload_div_0_ng_container_4_Template_p_button_keydown_enter_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.choose());
    });
    \u0275\u0275elementStart(2, "input", 7, 0);
    \u0275\u0275listener("change", function FileUpload_div_0_ng_container_4_Template_input_change_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FileUpload_div_0_ng_container_4_ng_template_4_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, FileUpload_div_0_ng_container_4_p_button_6_Template, 3, 4, "p-button", 13)(7, FileUpload_div_0_ng_container_4_p_button_7_Template, 3, 4, "p-button", 13);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("styleClass", ctx_r1.cn(ctx_r1.cx("pcChooseButton"), ctx_r1.chooseStyleClass))("disabled", ctx_r1.disabled || ctx_r1.isChooseDisabled())("label", ctx_r1.chooseButtonLabel)("buttonProps", ctx_r1.chooseButtonProps);
    \u0275\u0275attribute("data-pc-section", "choosebutton");
    \u0275\u0275advance();
    \u0275\u0275property("multiple", ctx_r1.multiple)("accept", ctx_r1.accept)("disabled", ctx_r1.disabled || ctx_r1.isChooseDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1.browseFilesLabel)("title", "")("data-pc-section", "input");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.auto && ctx_r1.showUploadButton);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.auto && ctx_r1.showCancelButton);
  }
}
function FileUpload_div_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FileUpload_div_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FileUpload_div_0_Conditional_9_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FileUpload_div_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_Conditional_9_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction8(2, _c142, ctx_r1.files, ctx_r1.uploadedFiles, ctx_r1.choose.bind(ctx_r1), ctx_r1.clear.bind(ctx_r1), ctx_r1.removeUploadedFile.bind(ctx_r1), ctx_r1.remove.bind(ctx_r1), ctx_r1.progress, ctx_r1.msgs));
  }
}
function FileUpload_div_0_Conditional_10_p_progressbar_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-progressbar", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ctx_r1.progress)("showValue", false);
  }
}
function FileUpload_div_0_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 24);
  }
  if (rf & 2) {
    const message_r6 = ctx.$implicit;
    \u0275\u0275property("severity", message_r6.severity)("text", message_r6.text);
  }
}
function FileUpload_div_0_Conditional_10_Conditional_3_ng_template_1_Template(rf, ctx) {
}
function FileUpload_div_0_Conditional_10_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("onRemove", function FileUpload_div_0_Conditional_10_Conditional_3_Conditional_2_Template_div_onRemove_0_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onRemoveClick($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("files", ctx_r1.files)("badgeValue", ctx_r1.pendingLabel)("previewWidth", ctx_r1.previewWidth)("fileRemoveIconTemplate", ctx_r1.cancelIconTemplate || ctx_r1._cancelIconTemplate);
  }
}
function FileUpload_div_0_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, FileUpload_div_0_Conditional_10_Conditional_3_ng_template_1_Template, 0, 0, "ng-template", 27);
    \u0275\u0275conditionalCreate(2, FileUpload_div_0_Conditional_10_Conditional_3_Conditional_2_Template, 1, 4, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("fileList"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.files)("ngForTemplate", ctx_r1.fileTemplate || ctx_r1._fileTemplate);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.fileTemplate && !ctx_r1._fileTemplate ? 2 : -1);
  }
}
function FileUpload_div_0_Conditional_10_Conditional_4_ng_template_1_Template(rf, ctx) {
}
function FileUpload_div_0_Conditional_10_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("onRemove", function FileUpload_div_0_Conditional_10_Conditional_4_Conditional_2_Template_div_onRemove_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onRemoveUploadedFileClick($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("files", ctx_r1.uploadedFiles)("badgeValue", ctx_r1.completedLabel())("previewWidth", ctx_r1.previewWidth)("fileRemoveIconTemplate", ctx_r1.cancelIconTemplate || ctx_r1._cancelIconTemplate);
  }
}
function FileUpload_div_0_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, FileUpload_div_0_Conditional_10_Conditional_4_ng_template_1_Template, 0, 0, "ng-template", 27);
    \u0275\u0275conditionalCreate(2, FileUpload_div_0_Conditional_10_Conditional_4_Conditional_2_Template, 1, 4, "div", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r1.cx("fileList"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.uploadedFiles)("ngForTemplate", ctx_r1.fileTemplate || ctx_r1._fileTemplate);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.fileTemplate && !ctx_r1._fileTemplate ? 2 : -1);
  }
}
function FileUpload_div_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_Conditional_10_p_progressbar_0_Template, 1, 2, "p-progressbar", 23);
    \u0275\u0275repeaterCreate(1, FileUpload_div_0_Conditional_10_For_2_Template, 1, 2, "p-message", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(3, FileUpload_div_0_Conditional_10_Conditional_3_Template, 3, 5, "div", 25);
    \u0275\u0275conditionalCreate(4, FileUpload_div_0_Conditional_10_Conditional_4_Template, 3, 5, "div", 25);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngIf", ctx_r1.hasFiles());
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.msgs);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.hasFiles() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.hasUploadedFiles() ? 4 : -1);
  }
}
function FileUpload_div_0_Conditional_11_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FileUpload_div_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_0_Conditional_11_ng_container_0_Template, 1, 0, "ng-container", 10);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.emptyTemplate || ctx_r1._emptyTemplate);
  }
}
function FileUpload_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "input", 7, 0);
    \u0275\u0275listener("change", function FileUpload_div_0_Template_input_change_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275template(4, FileUpload_div_0_ng_container_4_Template, 8, 13, "ng-container", 8)(5, FileUpload_div_0_ng_container_5_Template, 1, 0, "ng-container", 9)(6, FileUpload_div_0_ng_container_6_Template, 1, 0, "ng-container", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 11, 1);
    \u0275\u0275listener("dragenter", function FileUpload_div_0_Template_div_dragenter_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragEnter($event));
    })("dragleave", function FileUpload_div_0_Template_div_dragleave_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDragLeave($event));
    })("drop", function FileUpload_div_0_Template_div_drop_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDrop($event));
    });
    \u0275\u0275conditionalCreate(9, FileUpload_div_0_Conditional_9_Template, 1, 11, "ng-container")(10, FileUpload_div_0_Conditional_10_Template, 5, 3);
    \u0275\u0275conditionalCreate(11, FileUpload_div_0_Conditional_11_Template, 1, 1, "ng-container");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    \u0275\u0275property("ngStyle", ctx_r1.style);
    \u0275\u0275attribute("data-pc-name", "fileupload")("data-pc-section", "root");
    \u0275\u0275advance();
    \u0275\u0275styleProp("display", "none");
    \u0275\u0275property("multiple", ctx_r1.multiple)("accept", ctx_r1.accept)("disabled", ctx_r1.disabled || ctx_r1.isChooseDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1.browseFilesLabel)("title", "")("data-pc-section", "input");
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.cx("header"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.headerTemplate && !ctx_r1._headerTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction5(24, _c132, ctx_r1.files, ctx_r1.uploadedFiles, ctx_r1.choose.bind(ctx_r1), ctx_r1.clear.bind(ctx_r1), ctx_r1.upload.bind(ctx_r1)));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.toolbarTemplate || ctx_r1._toolbarTemplate);
    \u0275\u0275advance();
    \u0275\u0275classMap(ctx_r1.cx("content"));
    \u0275\u0275attribute("data-pc-section", "content");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.contentTemplate || ctx_r1._contentTemplate ? 9 : 10);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r1.emptyTemplate || ctx_r1._emptyTemplate) && !ctx_r1.hasFiles() && !ctx_r1.hasUploadedFiles() ? 11 : -1);
  }
}
function FileUpload_div_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "p-message", 24);
  }
  if (rf & 2) {
    const message_r10 = ctx.$implicit;
    \u0275\u0275property("severity", message_r10.severity)("text", message_r10.text);
  }
}
function FileUpload_div_1_ng_template_5_Conditional_0_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 35);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.uploadIcon);
  }
}
function FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 20);
  }
  if (rf & 2) {
    \u0275\u0275classMap("p-button-icon p-button-icon-left");
  }
}
function FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275template(1, FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1_span_2_1_Template, 1, 0, null, 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1._uploadIconTemplate || ctx_r1.uploadIconTemplate);
  }
}
function FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1__svg_svg_1_Template, 1, 2, "svg", 36)(2, FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1_span_2_Template, 2, 1, "span", 37);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.uploadIconTemplate && !ctx_r1._uploadIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1._uploadIconTemplate || ctx_r1.uploadIconTemplate);
  }
}
function FileUpload_div_1_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_1_ng_template_5_Conditional_0_span_0_Template, 1, 1, "span", 34)(1, FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1_Template, 3, 2, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.uploadIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.uploadIcon);
  }
}
function FileUpload_div_1_ng_template_5_Conditional_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 40);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", ctx_r1.chooseIcon);
  }
}
function FileUpload_div_1_ng_template_5_Conditional_1_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 15);
  }
  if (rf & 2) {
    \u0275\u0275attribute("data-pc-section", "uploadicon");
  }
}
function FileUpload_div_1_ng_template_5_Conditional_1_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_1_ng_template_5_Conditional_1_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_1_ng_template_5_Conditional_1_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_1_ng_template_5_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FileUpload_div_1_ng_template_5_Conditional_1_ng_container_1__svg_svg_1_Template, 1, 1, "svg", 14)(2, FileUpload_div_1_ng_template_5_Conditional_1_ng_container_1_2_Template, 1, 0, null, 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.chooseIconTemplate && !ctx_r1._chooseIconTemplate);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.chooseIconTemplate || ctx_r1._chooseIconTemplate);
  }
}
function FileUpload_div_1_ng_template_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_1_ng_template_5_Conditional_1_span_0_Template, 1, 1, "span", 39)(1, FileUpload_div_1_ng_template_5_Conditional_1_ng_container_1_Template, 3, 2, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r1.chooseIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.chooseIcon);
  }
}
function FileUpload_div_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FileUpload_div_1_ng_template_5_Conditional_0_Template, 2, 2)(1, FileUpload_div_1_ng_template_5_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.hasFiles() && !ctx_r1.auto ? 0 : 1);
  }
}
function FileUpload_div_1_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.basicFileChosenLabel(), " ");
  }
}
function FileUpload_div_1_Conditional_9_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FileUpload_div_1_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileUpload_div_1_Conditional_9_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngTemplateOutlet", ctx_r1.fileLabelTemplate || ctx_r1._fileLabelTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c152, ctx_r1.files));
  }
}
function FileUpload_div_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, FileUpload_div_1_Conditional_9_Conditional_0_Template, 2, 1, "span")(1, FileUpload_div_1_Conditional_9_Conditional_1_Template, 1, 4, "ng-container");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r1.fileLabelTemplate && !ctx_r1._fileLabelTemplate ? 0 : 1);
  }
}
function FileUpload_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275repeaterCreate(1, FileUpload_div_1_For_2_Template, 1, 2, "p-message", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementStart(3, "div")(4, "p-button", 32);
    \u0275\u0275listener("onClick", function FileUpload_div_1_Template_p_button_onClick_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBasicUploaderClick());
    })("keydown", function FileUpload_div_1_Template_p_button_keydown_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBasicKeydown($event));
    });
    \u0275\u0275template(5, FileUpload_div_1_ng_template_5_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementStart(7, "input", 33, 3);
    \u0275\u0275listener("change", function FileUpload_div_1_Template_input_change_7_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFileSelect($event));
    })("focus", function FileUpload_div_1_Template_input_focus_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onFocus());
    })("blur", function FileUpload_div_1_Template_input_blur_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onBlur());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, FileUpload_div_1_Conditional_9_Template, 2, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    \u0275\u0275attribute("data-pc-name", "fileupload");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.msgs);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r1.cx("basicContent"));
    \u0275\u0275advance();
    \u0275\u0275styleMap(ctx_r1.style);
    \u0275\u0275property("styleClass", ctx_r1.cn(ctx_r1.cx("pcChooseButton"), ctx_r1.chooseStyleClass))("disabled", ctx_r1.disabled)("label", ctx_r1.chooseButtonLabel)("buttonProps", ctx_r1.chooseButtonProps);
    \u0275\u0275advance(3);
    \u0275\u0275property("accept", ctx_r1.accept)("multiple", ctx_r1.multiple)("disabled", ctx_r1.disabled);
    \u0275\u0275attribute("aria-label", ctx_r1.browseFilesLabel)("data-pc-section", "input");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.auto ? 9 : -1);
  }
}
var classes3 = {
  root: ({
    instance
  }) => `p-fileupload p-fileupload-${instance.mode} p-component`,
  header: "p-fileupload-header",
  pcChooseButton: "p-fileupload-choose-button",
  pcUploadButton: "p-fileupload-upload-button",
  pcCancelButton: "p-fileupload-cancel-button",
  content: "p-fileupload-content",
  fileList: "p-fileupload-file-list",
  file: "p-fileupload-file",
  fileThumbnail: "p-fileupload-file-thumbnail",
  fileInfo: "p-fileupload-file-info",
  fileName: "p-fileupload-file-name",
  fileSize: "p-fileupload-file-size",
  pcFileBadge: "p-fileupload-file-badge",
  fileActions: "p-fileupload-file-actions",
  pcFileRemoveButton: "p-fileupload-file-remove-button",
  basicContent: "p-fileupload-basic-content"
};
var FileUploadStyle = class _FileUploadStyle extends BaseStyle {
  name = "fileupload";
  theme = style4;
  classes = classes3;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FileUploadStyle_BaseFactory;
    return function FileUploadStyle_Factory(__ngFactoryType__) {
      return (\u0275FileUploadStyle_BaseFactory || (\u0275FileUploadStyle_BaseFactory = \u0275\u0275getInheritedFactory(_FileUploadStyle)))(__ngFactoryType__ || _FileUploadStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _FileUploadStyle,
    factory: _FileUploadStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadStyle, [{
    type: Injectable
  }], null, null);
})();
var FileUploadClasses;
(function(FileUploadClasses2) {
  FileUploadClasses2["root"] = "p-fileupload";
  FileUploadClasses2["header"] = "p-fileupload-header";
  FileUploadClasses2["pcChooseButton"] = "p-fileupload-choose-button";
  FileUploadClasses2["pcUploadButton"] = "p-fileupload-upload-button";
  FileUploadClasses2["pcCancelButton"] = "p-fileupload-cancel-button";
  FileUploadClasses2["content"] = "p-fileupload-content";
  FileUploadClasses2["fileList"] = "p-fileupload-file-list";
  FileUploadClasses2["file"] = "p-fileupload-file";
  FileUploadClasses2["fileThumbnail"] = "p-fileupload-file-thumbnail";
  FileUploadClasses2["fileInfo"] = "p-fileupload-file-info";
  FileUploadClasses2["fileName"] = "p-fileupload-file-name";
  FileUploadClasses2["fileSize"] = "p-fileupload-file-size";
  FileUploadClasses2["pcFileBadge"] = "p-fileupload-file-badge";
  FileUploadClasses2["fileActions"] = "p-fileupload-file-actions";
  FileUploadClasses2["pcFileRemoveButton"] = "p-fileupload-file-remove-button";
  FileUploadClasses2["basicContent"] = "p-fileupload-basic-content";
})(FileUploadClasses || (FileUploadClasses = {}));
var FileContent = class _FileContent extends BaseComponent {
  _componentStyle = inject(FileUploadStyle);
  onRemove = output();
  files = input(...ngDevMode ? [void 0, {
    debugName: "files"
  }] : []);
  badgeSeverity = input("warn", ...ngDevMode ? [{
    debugName: "badgeSeverity"
  }] : []);
  badgeValue = input(...ngDevMode ? [void 0, {
    debugName: "badgeValue"
  }] : []);
  previewWidth = input(50, ...ngDevMode ? [{
    debugName: "previewWidth"
  }] : []);
  fileRemoveIconTemplate = input(...ngDevMode ? [void 0, {
    debugName: "fileRemoveIconTemplate"
  }] : []);
  onRemoveClick(event, index) {
    this.onRemove.emit({
      event,
      index
    });
  }
  formatSize(bytes) {
    const k = 1024;
    const dm = 3;
    const sizes = this.config.getTranslation(TranslationKeys.FILE_SIZE_TYPES);
    if (bytes === 0) {
      return `0 ${sizes[0]}`;
    }
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = (bytes / Math.pow(k, i)).toFixed(dm);
    return `${formattedSize} ${sizes[i]}`;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FileContent_BaseFactory;
    return function FileContent_Factory(__ngFactoryType__) {
      return (\u0275FileContent_BaseFactory || (\u0275FileContent_BaseFactory = \u0275\u0275getInheritedFactory(_FileContent)))(__ngFactoryType__ || _FileContent);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _FileContent,
    selectors: [["", "pFileContent", ""]],
    inputs: {
      files: [1, "files"],
      badgeSeverity: [1, "badgeSeverity"],
      badgeValue: [1, "badgeValue"],
      previewWidth: [1, "previewWidth"],
      fileRemoveIconTemplate: [1, "fileRemoveIconTemplate"]
    },
    outputs: {
      onRemove: "onRemove"
    },
    features: [\u0275\u0275ProvidersFeature([FileUploadStyle]), \u0275\u0275InheritDefinitionFeature],
    attrs: _c04,
    decls: 2,
    vars: 0,
    consts: [["icon", ""], [3, "class"], ["role", "presentation", 3, "src", "width"], [3, "value", "severity"], ["text", "", "rounded", "", "severity", "danger", 3, "onClick", "styleClass"], ["data-p-icon", "times", 3, "class"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "times"]],
    template: function FileContent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, FileContent_For_1_Template, 12, 22, "div", 1, _forTrack0);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.files());
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, Badge, Button, TimesIcon],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileContent, [{
    type: Component,
    args: [{
      selector: "[pFileContent]",
      standalone: true,
      template: `@for (file of files(); track file?.name + '-' + $index; let index = $index) {
        <div [class]="cx('file')">
            <img role="presentation" [class]="cx('fileThumbnail')" [attr.alt]="file.name" [src]="file.objectURL" [width]="previewWidth()" />
            <div [class]="cx('fileInfo')">
                <div [class]="cx('fileName')">{{ file.name }}</div>
                <span [class]="cx('fileSize')">{{ formatSize(file.size) }}</span>
            </div>
            <p-badge [value]="badgeValue()" [severity]="badgeSeverity()" [class]="cx('pcFileBadge')" />
            <div [class]="cx('fileActions')">
                <p-button (onClick)="onRemoveClick($event, index)" [styleClass]="cx('pcFileRemoveButton')" text rounded severity="danger">
                    <ng-template #icon let-iconClass="class">
                        @if (fileRemoveIconTemplate()) {
                            <ng-template *ngTemplateOutlet="fileRemoveIconTemplate(); context: { class: iconClass, file: file, index: index }"></ng-template>
                        } @else {
                            <svg data-p-icon="times" [class]="iconClass" [attr.aria-hidden]="true" />
                        }
                    </ng-template>
                </p-button>
            </div>
        </div>
    }`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [FileUploadStyle],
      imports: [CommonModule, Badge, Button, TimesIcon]
    }]
  }], null, null);
})();
var FileUpload = class _FileUpload extends BaseComponent {
  /**
   * Name of the request parameter to identify the files at backend.
   * @group Props
   */
  name;
  /**
   * Remote url to upload the files.
   * @group Props
   */
  url;
  /**
   * HTTP method to send the files to the url such as "post" and "put".
   * @group Props
   */
  method = "post";
  /**
   * Used to select multiple files at once from file dialog.
   * @group Props
   */
  multiple;
  /**
   * Comma-separated list of pattern to restrict the allowed file types. Can be any combination of either the MIME types (such as "image/*") or the file extensions (such as ".jpg").
   * @group Props
   */
  accept;
  /**
   * Disables the upload functionality.
   * @group Props
   */
  disabled;
  /**
   * When enabled, upload begins automatically after selection is completed.
   * @group Props
   */
  auto;
  /**
   * Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.
   * @group Props
   */
  withCredentials;
  /**
   * Maximum file size allowed in bytes.
   * @group Props
   */
  maxFileSize;
  /**
   * Summary message of the invalid file size.
   * @group Props
   */
  invalidFileSizeMessageSummary = "{0}: Invalid file size, ";
  /**
   * Detail message of the invalid file size.
   * @group Props
   */
  invalidFileSizeMessageDetail = "maximum upload size is {0}.";
  /**
   * Summary message of the invalid file type.
   * @group Props
   */
  invalidFileTypeMessageSummary = "{0}: Invalid file type, ";
  /**
   * Detail message of the invalid file type.
   * @group Props
   */
  invalidFileTypeMessageDetail = "allowed file types: {0}.";
  /**
   * Detail message of the invalid file type.
   * @group Props
   */
  invalidFileLimitMessageDetail = "limit is {0} at most.";
  /**
   * Summary message of the invalid file type.
   * @group Props
   */
  invalidFileLimitMessageSummary = "Maximum number of files exceeded, ";
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Width of the image thumbnail in pixels.
   * @group Props
   */
  previewWidth = 50;
  /**
   * Label of the choose button. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  chooseLabel;
  /**
   * Label of the upload button. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  uploadLabel;
  /**
   * Label of the cancel button. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  cancelLabel;
  /**
   * Icon of the choose button.
   * @group Props
   */
  chooseIcon;
  /**
   * Icon of the upload button.
   * @group Props
   */
  uploadIcon;
  /**
   * Icon of the cancel button.
   * @group Props
   */
  cancelIcon;
  /**
   * Whether to show the upload button.
   * @group Props
   */
  showUploadButton = true;
  /**
   * Whether to show the cancel button.
   * @group Props
   */
  showCancelButton = true;
  /**
   * Defines the UI of the component.
   * @group Props
   */
  mode = "advanced";
  /**
   * HttpHeaders class represents the header configuration options for an HTTP request.
   * @group Props
   */
  headers;
  /**
   * Whether to use the default upload or a manual implementation defined in uploadHandler callback. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  customUpload;
  /**
   * Maximum number of files that can be uploaded.
   * @group Props
   */
  fileLimit;
  /**
   * Style class of the upload button.
   * @group Props
   */
  uploadStyleClass;
  /**
   * Style class of the cancel button.
   * @group Props
   */
  cancelStyleClass;
  /**
   * Style class of the remove button.
   * @group Props
   */
  removeStyleClass;
  /**
   * Style class of the choose button.
   * @group Props
   */
  chooseStyleClass;
  /**
   * Used to pass all properties of the ButtonProps to the choose button inside the component.
   * @group Props
   */
  chooseButtonProps;
  /**
   * Used to pass all properties of the ButtonProps to the upload button inside the component.
   * @group Props
   */
  uploadButtonProps = {
    severity: "secondary"
  };
  /**
   * Used to pass all properties of the ButtonProps to the cancel button inside the component.
   * @group Props
   */
  cancelButtonProps = {
    severity: "secondary"
  };
  /**
   * Callback to invoke before file upload is initialized.
   * @param {FileBeforeUploadEvent} event - Custom upload event.
   * @group Emits
   */
  onBeforeUpload = new EventEmitter();
  /**
   * An event indicating that the request was sent to the server. Useful when a request may be retried multiple times, to distinguish between retries on the final event stream.
   * @param {FileSendEvent} event - Custom send event.
   * @group Emits
   */
  onSend = new EventEmitter();
  /**
   * Callback to invoke when file upload is complete.
   * @param {FileUploadEvent} event - Custom upload event.
   * @group Emits
   */
  onUpload = new EventEmitter();
  /**
   * Callback to invoke if file upload fails.
   * @param {FileUploadErrorEvent} event - Custom error event.
   * @group Emits
   */
  onError = new EventEmitter();
  /**
   * Callback to invoke when files in queue are removed without uploading using clear all button.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke when a file is removed without uploading using clear button of a file.
   * @param {FileRemoveEvent} event - Remove event.
   * @group Emits
   */
  onRemove = new EventEmitter();
  /**
   * Callback to invoke when files are selected.
   * @param {FileSelectEvent} event - Select event.
   * @group Emits
   */
  onSelect = new EventEmitter();
  /**
   * Callback to invoke when files are being uploaded.
   * @param {FileProgressEvent} event - Progress event.
   * @group Emits
   */
  onProgress = new EventEmitter();
  /**
   * Callback to invoke in custom upload mode to upload the files manually.
   * @param {FileUploadHandlerEvent} event - Upload handler event.
   * @group Emits
   */
  uploadHandler = new EventEmitter();
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new EventEmitter();
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {RemoveUploadedFileEvent} event - Remove event.
   * @group Emits
   */
  onRemoveUploadedFile = new EventEmitter();
  /**
   * Template for file.
   * @group Templates
   */
  fileTemplate;
  /**
   * Template for header.
   * @group Templates
   */
  headerTemplate;
  /**
   * Template for content.
   * @group Templates
   */
  contentTemplate;
  /**
   * Template for toolbar.
   * @group Templates
   */
  toolbarTemplate;
  /**
   * Template for choose icon.
   * @group Templates
   */
  chooseIconTemplate;
  /**
   * Template for file label.
   * @group Templates
   */
  fileLabelTemplate;
  /**
   * Template for upload icon.
   * @group Templates
   */
  uploadIconTemplate;
  /**
   * Template for cancel icon.
   * @group Templates
   */
  cancelIconTemplate;
  /**
   * Template for empty state.
   * @group Templates
   */
  emptyTemplate;
  advancedFileInput;
  basicFileInput;
  content;
  set files(files) {
    this._files = [];
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      if (this.validate(file)) {
        if (this.isImage(file)) {
          file.objectURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i]));
        }
        this._files.push(files[i]);
      }
    }
  }
  get files() {
    return this._files;
  }
  get basicButtonLabel() {
    if (this.auto || !this.hasFiles()) {
      return this.chooseLabel;
    }
    return this.uploadLabel ?? this.files[0].name;
  }
  _files = [];
  progress = 0;
  dragHighlight;
  msgs;
  uploadedFileCount = 0;
  focus;
  uploading;
  duplicateIEEvent;
  // flag to recognize duplicate onchange event for file input
  translationSubscription;
  dragOverListener;
  uploadedFiles = [];
  sanitizer = inject(DomSanitizer);
  zone = inject(NgZone);
  http = inject(HttpClient);
  _componentStyle = inject(FileUploadStyle);
  ngOnInit() {
    super.ngOnInit();
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.cd.markForCheck();
    });
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (isPlatformBrowser(this.platformId)) {
      if (this.mode === "advanced") {
        this.zone.runOutsideAngular(() => {
          if (this.content) {
            this.dragOverListener = this.renderer.listen(this.content.nativeElement, "dragover", this.onDragOver.bind(this));
          }
        });
      }
    }
  }
  _headerTemplate;
  _contentTemplate;
  _toolbarTemplate;
  _chooseIconTemplate;
  _uploadIconTemplate;
  _cancelIconTemplate;
  _emptyTemplate;
  _fileTemplate;
  _fileLabelTemplate;
  templates;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "file":
          this._fileTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
        case "toolbar":
          this._toolbarTemplate = item.template;
          break;
        case "chooseicon":
          this._chooseIconTemplate = item.template;
          break;
        case "uploadicon":
          this._uploadIconTemplate = item.template;
          break;
        case "cancelicon":
          this._cancelIconTemplate = item.template;
          break;
        case "empty":
          this._emptyTemplate = item.template;
          break;
        case "filelabel":
          this._fileLabelTemplate = item.template;
          break;
        default:
          this._fileTemplate = item.template;
          break;
      }
    });
  }
  basicFileChosenLabel() {
    if (this.auto) return this.chooseButtonLabel;
    else if (this.hasFiles()) {
      if (this.files && this.files.length === 1) return this.files[0].name;
      return this.config.getTranslation("fileChosenMessage")?.replace("{0}", this.files.length);
    }
    return this.config.getTranslation("noFileChosenMessage") || "";
  }
  completedLabel() {
    return this.config.getTranslation("completed") || "";
  }
  getTranslation(option) {
    return this.config.getTranslation(option);
  }
  choose() {
    this.advancedFileInput?.nativeElement.click();
  }
  onFileSelect(event) {
    if (event.type !== "drop" && this.isIE11() && this.duplicateIEEvent) {
      this.duplicateIEEvent = false;
      return;
    }
    if (!this.multiple) {
      this.files = [];
    }
    this.msgs = [];
    this.files = this.files || [];
    let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      if (!this.isFileSelected(file)) {
        if (this.validate(file)) {
          if (this.isImage(file)) {
            file.objectURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i]));
          }
          this.files.push(files[i]);
        }
      }
    }
    this.onSelect.emit({
      originalEvent: event,
      files,
      currentFiles: this.files
    });
    this.checkFileLimit(files);
    if (this.hasFiles() && this.auto && (this.mode !== "advanced" || !this.isFileLimitExceeded())) {
      this.upload();
    }
    if (event.type !== "drop" && this.isIE11()) {
      this.clearIEInput();
    } else {
      this.clearInputElement();
    }
  }
  isFileSelected(file) {
    for (let sFile of this.files) {
      if (sFile.name + sFile.type + sFile.size === file.name + file.type + file.size) {
        return true;
      }
    }
    return false;
  }
  isIE11() {
    if (isPlatformBrowser(this.platformId)) {
      return !!this.document.defaultView["MSInputMethodContext"] && !!this.document["documentMode"];
    }
  }
  validate(file) {
    this.msgs = this.msgs || [];
    if (this.accept && !this.isFileTypeValid(file)) {
      const text = `${this.invalidFileTypeMessageSummary.replace("{0}", file.name)} ${this.invalidFileTypeMessageDetail.replace("{0}", this.accept)}`;
      this.msgs.push({
        severity: "error",
        text
      });
      return false;
    }
    if (this.maxFileSize && file.size > this.maxFileSize) {
      const text = `${this.invalidFileSizeMessageSummary.replace("{0}", file.name)} ${this.invalidFileSizeMessageDetail.replace("{0}", this.formatSize(this.maxFileSize))}`;
      this.msgs.push({
        severity: "error",
        text
      });
      return false;
    }
    return true;
  }
  isFileTypeValid(file) {
    let acceptableTypes = this.accept?.split(",").map((type) => type.trim());
    for (let type of acceptableTypes) {
      let acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type) : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();
      if (acceptable) {
        return true;
      }
    }
    return false;
  }
  getTypeClass(fileType) {
    return fileType.substring(0, fileType.indexOf("/"));
  }
  isWildcard(fileType) {
    return fileType.indexOf("*") !== -1;
  }
  getFileExtension(file) {
    return "." + file.name.split(".").pop();
  }
  isImage(file) {
    return /^image\//.test(file.type);
  }
  onImageLoad(img) {
    window.URL.revokeObjectURL(img.src);
  }
  /**
   * Uploads the selected files.
   * @group Method
   */
  uploader() {
    if (this.customUpload) {
      if (this.fileLimit) {
        this.uploadedFileCount += this.files.length;
      }
      this.uploadHandler.emit({
        files: this.files
      });
      this.cd.markForCheck();
    } else {
      this.uploading = true;
      this.msgs = [];
      let formData = new FormData();
      this.onBeforeUpload.emit({
        formData
      });
      for (let i = 0; i < this.files.length; i++) {
        formData.append(this.name, this.files[i], this.files[i].name);
      }
      this.http.request(this.method, this.url, {
        body: formData,
        headers: this.headers,
        reportProgress: true,
        observe: "events",
        withCredentials: this.withCredentials
      }).subscribe((event) => {
        switch (event.type) {
          case HttpEventType.Sent:
            this.onSend.emit({
              originalEvent: event,
              formData
            });
            break;
          case HttpEventType.Response:
            this.uploading = false;
            this.progress = 0;
            if (event["status"] >= 200 && event["status"] < 300) {
              if (this.fileLimit) {
                this.uploadedFileCount += this.files.length;
              }
              this.onUpload.emit({
                originalEvent: event,
                files: this.files
              });
            } else {
              this.onError.emit({
                files: this.files
              });
            }
            this.uploadedFiles = [...this.uploadedFiles, ...this.files];
            this.clear();
            break;
          case HttpEventType.UploadProgress: {
            if (event["loaded"]) {
              this.progress = Math.round(event["loaded"] * 100 / event["total"]);
            }
            this.onProgress.emit({
              originalEvent: event,
              progress: this.progress
            });
            break;
          }
        }
        this.cd.markForCheck();
      }, (error) => {
        this.uploading = false;
        this.onError.emit({
          files: this.files,
          error
        });
      });
    }
  }
  onRemoveClick(e) {
    const {
      event,
      index
    } = e;
    if (this.hasFiles()) {
      this.remove(event, index);
    }
  }
  onRemoveUploadedFileClick(e) {
    const {
      event,
      index
    } = e;
    if (this.hasUploadedFiles()) {
      this.removeUploadedFile(index);
    }
  }
  /**
   * Clears the files list.
   * @group Method
   */
  clear() {
    this.files = [];
    this.onClear.emit();
    this.clearInputElement();
    this.msgs = [];
    this.cd.markForCheck();
  }
  /**
   * Removes a single file.
   * @param {Event} event - Browser event.
   * @param {Number} index - Index of the file.
   * @group Method
   */
  remove(event, index) {
    this.clearInputElement();
    this.onRemove.emit({
      originalEvent: event,
      file: this.files[index]
    });
    this.files.splice(index, 1);
    this.checkFileLimit(this.files);
  }
  /**
   * Removes uploaded file.
   * @param {Number} index - Index of the file to be removed.
   * @group Method
   */
  removeUploadedFile(index) {
    let removedFile = this.uploadedFiles.splice(index, 1)[0];
    this.uploadedFiles = [...this.uploadedFiles];
    this.onRemoveUploadedFile.emit({
      file: removedFile,
      files: this.uploadedFiles
    });
  }
  isFileLimitExceeded() {
    const isAutoMode = this.auto;
    const totalFileCount = isAutoMode ? this.files.length : this.files.length + this.uploadedFileCount;
    if (this.fileLimit && this.fileLimit <= totalFileCount && this.focus) {
      this.focus = false;
    }
    return this.fileLimit && this.fileLimit < totalFileCount;
  }
  isChooseDisabled() {
    if (this.auto) {
      return this.fileLimit && this.fileLimit <= this.files.length;
    } else {
      return this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount;
    }
  }
  checkFileLimit(files) {
    this.msgs ??= [];
    const hasExistingValidationMessages = this.msgs.length > 0 && this.fileLimit && this.fileLimit < files.length;
    if (this.isFileLimitExceeded() || hasExistingValidationMessages) {
      const text = `${this.invalidFileLimitMessageSummary.replace("{0}", this.fileLimit.toString())} ${this.invalidFileLimitMessageDetail.replace("{0}", this.fileLimit.toString())}`;
      this.msgs.push({
        severity: "error",
        text
      });
    } else {
      this.msgs = this.msgs.filter((msg) => !msg.text.includes(this.invalidFileLimitMessageSummary));
    }
  }
  clearInputElement() {
    if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
      this.advancedFileInput.nativeElement.value = "";
    }
    if (this.basicFileInput && this.basicFileInput.nativeElement) {
      this.basicFileInput.nativeElement.value = "";
    }
  }
  clearIEInput() {
    if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
      this.duplicateIEEvent = true;
      this.advancedFileInput.nativeElement.value = "";
    }
  }
  hasFiles() {
    return this.files && this.files.length > 0;
  }
  hasUploadedFiles() {
    return this.uploadedFiles && this.uploadedFiles.length > 0;
  }
  onDragEnter(e) {
    if (!this.disabled) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  onDragOver(e) {
    if (!this.disabled) {
      W(this.content?.nativeElement, "p-fileupload-highlight");
      this.dragHighlight = true;
      e.stopPropagation();
      e.preventDefault();
    }
  }
  onDragLeave(event) {
    if (!this.disabled) {
      O(this.content?.nativeElement, "p-fileupload-highlight");
    }
  }
  onDrop(event) {
    if (!this.disabled) {
      O(this.content?.nativeElement, "p-fileupload-highlight");
      event.stopPropagation();
      event.preventDefault();
      let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
      let allowDrop = this.multiple || files && files.length === 1;
      if (allowDrop) {
        this.onFileSelect(event);
      }
    }
  }
  onFocus() {
    this.focus = true;
  }
  onBlur() {
    this.focus = false;
  }
  formatSize(bytes) {
    const k = 1024;
    const dm = 3;
    const sizes = this.getTranslation(TranslationKeys.FILE_SIZE_TYPES);
    if (bytes === 0) {
      return `0 ${sizes[0]}`;
    }
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = (bytes / Math.pow(k, i)).toFixed(dm);
    return `${formattedSize} ${sizes[i]}`;
  }
  upload() {
    if (this.hasFiles()) this.uploader();
  }
  onBasicUploaderClick() {
    this.basicFileInput?.nativeElement.click();
  }
  onBasicKeydown(event) {
    switch (event.code) {
      case "Space":
      case "Enter":
        this.onBasicUploaderClick();
        event.preventDefault();
        break;
    }
  }
  imageError(event) {
    this.onImageError.emit(event);
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  get chooseButtonLabel() {
    return this.chooseLabel || this.config.getTranslation(TranslationKeys.CHOOSE);
  }
  get uploadButtonLabel() {
    return this.uploadLabel || this.config.getTranslation(TranslationKeys.UPLOAD);
  }
  get cancelButtonLabel() {
    return this.cancelLabel || this.config.getTranslation(TranslationKeys.CANCEL);
  }
  get browseFilesLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)[TranslationKeys.BROWSE_FILES];
  }
  get pendingLabel() {
    return this.config.getTranslation(TranslationKeys.PENDING);
  }
  ngOnDestroy() {
    if (this.content && this.content.nativeElement) {
      if (this.dragOverListener) {
        this.dragOverListener();
        this.dragOverListener = null;
      }
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    super.ngOnDestroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FileUpload_BaseFactory;
    return function FileUpload_Factory(__ngFactoryType__) {
      return (\u0275FileUpload_BaseFactory || (\u0275FileUpload_BaseFactory = \u0275\u0275getInheritedFactory(_FileUpload)))(__ngFactoryType__ || _FileUpload);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _FileUpload,
    selectors: [["p-fileupload"], ["p-fileUpload"]],
    contentQueries: function FileUpload_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c22, 4);
        \u0275\u0275contentQuery(dirIndex, _c32, 4);
        \u0275\u0275contentQuery(dirIndex, _c42, 4);
        \u0275\u0275contentQuery(dirIndex, _c52, 4);
        \u0275\u0275contentQuery(dirIndex, _c62, 4);
        \u0275\u0275contentQuery(dirIndex, _c72, 4);
        \u0275\u0275contentQuery(dirIndex, _c82, 4);
        \u0275\u0275contentQuery(dirIndex, _c92, 4);
        \u0275\u0275contentQuery(dirIndex, _c102, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.toolbarTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.chooseIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fileLabelTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.uploadIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cancelIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.emptyTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function FileUpload_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c112, 5);
        \u0275\u0275viewQuery(_c122, 5);
        \u0275\u0275viewQuery(_c42, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.advancedFileInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.basicFileInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.content = _t.first);
      }
    },
    inputs: {
      name: "name",
      url: "url",
      method: "method",
      multiple: [2, "multiple", "multiple", booleanAttribute],
      accept: "accept",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      auto: [2, "auto", "auto", booleanAttribute],
      withCredentials: [2, "withCredentials", "withCredentials", booleanAttribute],
      maxFileSize: [2, "maxFileSize", "maxFileSize", numberAttribute],
      invalidFileSizeMessageSummary: "invalidFileSizeMessageSummary",
      invalidFileSizeMessageDetail: "invalidFileSizeMessageDetail",
      invalidFileTypeMessageSummary: "invalidFileTypeMessageSummary",
      invalidFileTypeMessageDetail: "invalidFileTypeMessageDetail",
      invalidFileLimitMessageDetail: "invalidFileLimitMessageDetail",
      invalidFileLimitMessageSummary: "invalidFileLimitMessageSummary",
      style: "style",
      styleClass: "styleClass",
      previewWidth: [2, "previewWidth", "previewWidth", numberAttribute],
      chooseLabel: "chooseLabel",
      uploadLabel: "uploadLabel",
      cancelLabel: "cancelLabel",
      chooseIcon: "chooseIcon",
      uploadIcon: "uploadIcon",
      cancelIcon: "cancelIcon",
      showUploadButton: [2, "showUploadButton", "showUploadButton", booleanAttribute],
      showCancelButton: [2, "showCancelButton", "showCancelButton", booleanAttribute],
      mode: "mode",
      headers: "headers",
      customUpload: [2, "customUpload", "customUpload", booleanAttribute],
      fileLimit: [2, "fileLimit", "fileLimit", (value) => numberAttribute(value, null)],
      uploadStyleClass: "uploadStyleClass",
      cancelStyleClass: "cancelStyleClass",
      removeStyleClass: "removeStyleClass",
      chooseStyleClass: "chooseStyleClass",
      chooseButtonProps: "chooseButtonProps",
      uploadButtonProps: "uploadButtonProps",
      cancelButtonProps: "cancelButtonProps",
      files: "files"
    },
    outputs: {
      onBeforeUpload: "onBeforeUpload",
      onSend: "onSend",
      onUpload: "onUpload",
      onError: "onError",
      onClear: "onClear",
      onRemove: "onRemove",
      onSelect: "onSelect",
      onProgress: "onProgress",
      uploadHandler: "uploadHandler",
      onImageError: "onImageError",
      onRemoveUploadedFile: "onRemoveUploadedFile"
    },
    features: [\u0275\u0275ProvidersFeature([FileUploadStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 2,
    consts: [["advancedfileinput", ""], ["content", ""], ["icon", ""], ["basicfileinput", ""], [3, "class", "ngStyle", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "ngStyle"], ["type", "file", 3, "change", "multiple", "accept", "disabled"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], [3, "dragenter", "dragleave", "drop"], [3, "focus", "blur", "onClick", "keydown.enter", "styleClass", "disabled", "label", "buttonProps"], [3, "label", "disabled", "styleClass", "buttonProps", "onClick", 4, "ngIf"], ["data-p-icon", "plus", 4, "ngIf"], ["data-p-icon", "plus"], [3, "onClick", "label", "disabled", "styleClass", "buttonProps"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["data-p-icon", "upload", 4, "ngIf"], ["data-p-icon", "upload"], ["data-p-icon", "times", 4, "ngIf"], ["data-p-icon", "times"], [3, "value", "showValue", 4, "ngIf"], [3, "severity", "text"], [3, "class"], [3, "value", "showValue"], ["ngFor", "", 3, "ngForOf", "ngForTemplate"], ["pFileContent", "", 3, "files", "badgeValue", "previewWidth", "fileRemoveIconTemplate"], ["pFileContent", "", 3, "onRemove", "files", "badgeValue", "previewWidth", "fileRemoveIconTemplate"], ["pFileContent", "", "badgeSeverity", "success", 3, "files", "badgeValue", "previewWidth", "fileRemoveIconTemplate"], ["pFileContent", "", "badgeSeverity", "success", 3, "onRemove", "files", "badgeValue", "previewWidth", "fileRemoveIconTemplate"], [3, "onClick", "keydown", "styleClass", "disabled", "label", "buttonProps"], ["type", "file", 3, "change", "focus", "blur", "accept", "multiple", "disabled"], ["class", "p-button-icon p-button-icon-left", 3, "ngClass", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left", 3, "ngClass"], ["data-p-icon", "upload", 3, "class", 4, "ngIf"], ["class", "p-button-icon p-button-icon-left", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left"], ["class", "p-button-icon p-button-icon-left pi", 3, "ngClass", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left", "pi", 3, "ngClass"]],
    template: function FileUpload_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, FileUpload_div_0_Template, 12, 30, "div", 4)(1, FileUpload_div_1_Template, 10, 17, "div", 5);
      }
      if (rf & 2) {
        \u0275\u0275property("ngIf", ctx.mode === "advanced");
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", ctx.mode === "basic");
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Button, ProgressBar, Message, PlusIcon, UploadIcon, TimesIcon, SharedModule, FileContent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUpload, [{
    type: Component,
    args: [{
      selector: "p-fileupload, p-fileUpload",
      standalone: true,
      imports: [CommonModule, Button, ProgressBar, Message, PlusIcon, UploadIcon, TimesIcon, SharedModule, FileContent],
      template: `
        <div [class]="cn(cx('root'), styleClass)" [ngStyle]="style" *ngIf="mode === 'advanced'" [attr.data-pc-name]="'fileupload'" [attr.data-pc-section]="'root'">
            <input
                [attr.aria-label]="browseFilesLabel"
                #advancedfileinput
                type="file"
                (change)="onFileSelect($event)"
                [multiple]="multiple"
                [accept]="accept"
                [disabled]="disabled || isChooseDisabled()"
                [attr.title]="''"
                [attr.data-pc-section]="'input'"
                [style.display]="'none'"
            />
            <div [class]="cx('header')">
                <ng-container *ngIf="!headerTemplate && !_headerTemplate">
                    <p-button
                        [styleClass]="cn(cx('pcChooseButton'), chooseStyleClass)"
                        [disabled]="disabled || isChooseDisabled()"
                        (focus)="onFocus()"
                        [label]="chooseButtonLabel"
                        (blur)="onBlur()"
                        (onClick)="choose()"
                        (keydown.enter)="choose()"
                        [attr.data-pc-section]="'choosebutton'"
                        [buttonProps]="chooseButtonProps"
                    >
                        <input
                            [attr.aria-label]="browseFilesLabel"
                            #advancedfileinput
                            type="file"
                            (change)="onFileSelect($event)"
                            [multiple]="multiple"
                            [accept]="accept"
                            [disabled]="disabled || isChooseDisabled()"
                            [attr.title]="''"
                            [attr.data-pc-section]="'input'"
                        />
                        <ng-template #icon>
                            <span *ngIf="chooseIcon" [class]="chooseIcon" [attr.aria-label]="true" [attr.data-pc-section]="'chooseicon'"></span>
                            <ng-container *ngIf="!chooseIcon">
                                <svg data-p-icon="plus" *ngIf="!chooseIconTemplate && !_chooseIconTemplate" [attr.aria-label]="true" [attr.data-pc-section]="'chooseicon'" />
                                <span *ngIf="chooseIconTemplate || _chooseIconTemplate" [attr.aria-label]="true" [attr.data-pc-section]="'chooseicon'">
                                    <ng-template *ngTemplateOutlet="chooseIconTemplate || _chooseIconTemplate"></ng-template>
                                </span>
                            </ng-container>
                        </ng-template>
                    </p-button>

                    <p-button
                        *ngIf="!auto && showUploadButton"
                        [label]="uploadButtonLabel"
                        (onClick)="upload()"
                        [disabled]="!hasFiles() || isFileLimitExceeded()"
                        [styleClass]="cn(cx('pcUploadButton'), uploadStyleClass)"
                        [buttonProps]="uploadButtonProps"
                    >
                        <ng-template #icon>
                            <span *ngIf="uploadIcon" [ngClass]="uploadIcon" [attr.aria-hidden]="true"></span>
                            <ng-container *ngIf="!uploadIcon">
                                <svg data-p-icon="upload" *ngIf="!uploadIconTemplate && !_uploadIconTemplate" />
                                <span *ngIf="uploadIconTemplate || _uploadIconTemplate" [attr.aria-hidden]="true">
                                    <ng-template *ngTemplateOutlet="uploadIconTemplate || _uploadIconTemplate"></ng-template>
                                </span>
                            </ng-container>
                        </ng-template>
                    </p-button>
                    <p-button *ngIf="!auto && showCancelButton" [label]="cancelButtonLabel" (onClick)="clear()" [disabled]="!hasFiles() || uploading" [styleClass]="cn(cx('pcCancelButton'), cancelStyleClass)" [buttonProps]="cancelButtonProps">
                        <ng-template #icon>
                            <span *ngIf="cancelIcon" [ngClass]="cancelIcon"></span>
                            <ng-container *ngIf="!cancelIcon">
                                <svg data-p-icon="times" *ngIf="!cancelIconTemplate && !_cancelIconTemplate" [attr.aria-hidden]="true" />
                                <span *ngIf="cancelIconTemplate || _cancelIconTemplate" [attr.aria-hidden]="true">
                                    <ng-template *ngTemplateOutlet="cancelIconTemplate || _cancelIconTemplate"></ng-template>
                                </span>
                            </ng-container>
                        </ng-template>
                    </p-button>
                </ng-container>
                <ng-container
                    *ngTemplateOutlet="
                        headerTemplate || _headerTemplate;
                        context: {
                            $implicit: files,
                            uploadedFiles: uploadedFiles,
                            chooseCallback: choose.bind(this),
                            clearCallback: clear.bind(this),
                            uploadCallback: upload.bind(this)
                        }
                    "
                ></ng-container>
                <ng-container *ngTemplateOutlet="toolbarTemplate || _toolbarTemplate"></ng-container>
            </div>
            <div #content [class]="cx('content')" (dragenter)="onDragEnter($event)" (dragleave)="onDragLeave($event)" (drop)="onDrop($event)" [attr.data-pc-section]="'content'">
                @if (contentTemplate || _contentTemplate) {
                    <ng-container
                        *ngTemplateOutlet="
                            contentTemplate || _contentTemplate;
                            context: {
                                $implicit: files,
                                uploadedFiles: uploadedFiles,
                                chooseCallback: choose.bind(this),
                                clearCallback: clear.bind(this),
                                removeUploadedFileCallback: removeUploadedFile.bind(this),
                                removeFileCallback: remove.bind(this),
                                progress: progress,
                                messages: msgs
                            }
                        "
                    ></ng-container>
                } @else {
                    <p-progressbar [value]="progress" [showValue]="false" *ngIf="hasFiles()"></p-progressbar>
                    @for (message of msgs; track message) {
                        <p-message [severity]="message.severity" [text]="message.text"></p-message>
                    }

                    @if (hasFiles()) {
                        <div [class]="cx('fileList')">
                            <ng-template ngFor [ngForOf]="files" [ngForTemplate]="fileTemplate || _fileTemplate"></ng-template>
                            @if (!fileTemplate && !_fileTemplate) {
                                <div pFileContent [files]="files" (onRemove)="onRemoveClick($event)" [badgeValue]="pendingLabel" [previewWidth]="previewWidth" [fileRemoveIconTemplate]="cancelIconTemplate || _cancelIconTemplate"></div>
                            }
                        </div>
                    }
                    @if (hasUploadedFiles()) {
                        <div [class]="cx('fileList')">
                            <ng-template ngFor [ngForOf]="uploadedFiles" [ngForTemplate]="fileTemplate || _fileTemplate"></ng-template>
                            @if (!fileTemplate && !_fileTemplate) {
                                <div
                                    pFileContent
                                    [files]="uploadedFiles"
                                    (onRemove)="onRemoveUploadedFileClick($event)"
                                    [badgeValue]="completedLabel()"
                                    badgeSeverity="success"
                                    [previewWidth]="previewWidth"
                                    [fileRemoveIconTemplate]="cancelIconTemplate || _cancelIconTemplate"
                                ></div>
                            }
                        </div>
                    }
                }
                @if ((emptyTemplate || _emptyTemplate) && !hasFiles() && !hasUploadedFiles()) {
                    <ng-container *ngTemplateOutlet="emptyTemplate || _emptyTemplate"></ng-container>
                }
            </div>
        </div>
        <div [class]="cn(cx('root'), styleClass)" *ngIf="mode === 'basic'" [attr.data-pc-name]="'fileupload'">
            @for (message of msgs; track message) {
                <p-message [severity]="message.severity" [text]="message.text"></p-message>
            }

            <div [class]="cx('basicContent')">
                <p-button
                    [styleClass]="cn(cx('pcChooseButton'), chooseStyleClass)"
                    [disabled]="disabled"
                    [label]="chooseButtonLabel"
                    [style]="style"
                    (onClick)="onBasicUploaderClick()"
                    (keydown)="onBasicKeydown($event)"
                    [buttonProps]="chooseButtonProps"
                >
                    <ng-template #icon>
                        @if (hasFiles() && !auto) {
                            <span *ngIf="uploadIcon" class="p-button-icon p-button-icon-left" [ngClass]="uploadIcon"></span>
                            <ng-container *ngIf="!uploadIcon">
                                <svg data-p-icon="upload" *ngIf="!uploadIconTemplate && !_uploadIconTemplate" [class]="'p-button-icon p-button-icon-left'" />
                                <span *ngIf="_uploadIconTemplate || uploadIconTemplate" class="p-button-icon p-button-icon-left">
                                    <ng-template *ngTemplateOutlet="_uploadIconTemplate || uploadIconTemplate"></ng-template>
                                </span>
                            </ng-container>
                        } @else {
                            <span *ngIf="chooseIcon" class="p-button-icon p-button-icon-left pi" [ngClass]="chooseIcon"></span>
                            <ng-container *ngIf="!chooseIcon">
                                <svg data-p-icon="plus" *ngIf="!chooseIconTemplate && !_chooseIconTemplate" [attr.data-pc-section]="'uploadicon'" />
                                <ng-template *ngTemplateOutlet="chooseIconTemplate || _chooseIconTemplate"></ng-template>
                            </ng-container>
                        }
                    </ng-template>
                    <input
                        [attr.aria-label]="browseFilesLabel"
                        #basicfileinput
                        type="file"
                        [accept]="accept"
                        [multiple]="multiple"
                        [disabled]="disabled"
                        (change)="onFileSelect($event)"
                        (focus)="onFocus()"
                        (blur)="onBlur()"
                        [attr.data-pc-section]="'input'"
                    />
                </p-button>
                @if (!auto) {
                    @if (!fileLabelTemplate && !_fileLabelTemplate) {
                        <span>
                            {{ basicFileChosenLabel() }}
                        </span>
                    } @else {
                        <ng-container *ngTemplateOutlet="fileLabelTemplate || _fileLabelTemplate; context: { $implicit: files }"></ng-container>
                    }
                }
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [FileUploadStyle]
    }]
  }], null, {
    name: [{
      type: Input
    }],
    url: [{
      type: Input
    }],
    method: [{
      type: Input
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    accept: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    auto: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    withCredentials: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    maxFileSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    invalidFileSizeMessageSummary: [{
      type: Input
    }],
    invalidFileSizeMessageDetail: [{
      type: Input
    }],
    invalidFileTypeMessageSummary: [{
      type: Input
    }],
    invalidFileTypeMessageDetail: [{
      type: Input
    }],
    invalidFileLimitMessageDetail: [{
      type: Input
    }],
    invalidFileLimitMessageSummary: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    previewWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    chooseLabel: [{
      type: Input
    }],
    uploadLabel: [{
      type: Input
    }],
    cancelLabel: [{
      type: Input
    }],
    chooseIcon: [{
      type: Input
    }],
    uploadIcon: [{
      type: Input
    }],
    cancelIcon: [{
      type: Input
    }],
    showUploadButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showCancelButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    mode: [{
      type: Input
    }],
    headers: [{
      type: Input
    }],
    customUpload: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fileLimit: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, null)
      }]
    }],
    uploadStyleClass: [{
      type: Input
    }],
    cancelStyleClass: [{
      type: Input
    }],
    removeStyleClass: [{
      type: Input
    }],
    chooseStyleClass: [{
      type: Input
    }],
    chooseButtonProps: [{
      type: Input
    }],
    uploadButtonProps: [{
      type: Input
    }],
    cancelButtonProps: [{
      type: Input
    }],
    onBeforeUpload: [{
      type: Output
    }],
    onSend: [{
      type: Output
    }],
    onUpload: [{
      type: Output
    }],
    onError: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onRemove: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onProgress: [{
      type: Output
    }],
    uploadHandler: [{
      type: Output
    }],
    onImageError: [{
      type: Output
    }],
    onRemoveUploadedFile: [{
      type: Output
    }],
    fileTemplate: [{
      type: ContentChild,
      args: ["file", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    toolbarTemplate: [{
      type: ContentChild,
      args: ["toolbar", {
        descendants: false
      }]
    }],
    chooseIconTemplate: [{
      type: ContentChild,
      args: ["chooseicon", {
        descendants: false
      }]
    }],
    fileLabelTemplate: [{
      type: ContentChild,
      args: ["filelabel", {
        descendants: false
      }]
    }],
    uploadIconTemplate: [{
      type: ContentChild,
      args: ["uploadicon", {
        descendants: false
      }]
    }],
    cancelIconTemplate: [{
      type: ContentChild,
      args: ["cancelicon", {
        descendants: false
      }]
    }],
    emptyTemplate: [{
      type: ContentChild,
      args: ["empty", {
        descendants: false
      }]
    }],
    advancedFileInput: [{
      type: ViewChild,
      args: ["advancedfileinput"]
    }],
    basicFileInput: [{
      type: ViewChild,
      args: ["basicfileinput"]
    }],
    content: [{
      type: ViewChild,
      args: ["content"]
    }],
    files: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var FileUploadModule = class _FileUploadModule {
  static \u0275fac = function FileUploadModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileUploadModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FileUploadModule,
    imports: [FileUpload, SharedModule],
    exports: [FileUpload, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [FileUpload, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadModule, [{
    type: NgModule,
    args: [{
      imports: [FileUpload, SharedModule],
      exports: [FileUpload, SharedModule]
    }]
  }], null, null);
})();

export {
  Menu,
  MenuModule,
  ProgressBar,
  ProgressBarModule,
  FileUpload,
  FileUploadModule
};
//# sourceMappingURL=chunk-I5YWADMQ.js.map
