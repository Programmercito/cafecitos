import {
  FileUpload,
  FileUploadModule,
  Menu,
  MenuModule
} from "./chunk-I5YWADMQ.js";
import {
  ConfirmDialog,
  ConfirmDialogModule,
  Documentation
} from "./chunk-2QQGWJ2J.js";
import {
  DatePicker,
  DatePickerModule,
  Dialog,
  DialogModule,
  IconField,
  IconFieldModule,
  InputIcon,
  InputIconModule,
  InputNumber,
  InputNumberModule,
  Select,
  SelectModule,
  Table,
  TableModule,
  Tag,
  TagModule,
  Toolbar,
  ToolbarModule,
  Tooltip,
  TooltipModule
} from "./chunk-RQV6GEFR.js";
import {
  AppConfigurator,
  AppFloatingConfigurator,
  Logo,
  Qr,
  StyleClass,
  StyleClassModule
} from "./chunk-ZEVDK2LB.js";
import {
  ActivatedRoute,
  DomRendererFactory2,
  DomSanitizer,
  LayoutService,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  bootstrapApplication,
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withHashLocation,
  withInMemoryScrolling
} from "./chunk-5CMSTRG7.js";
import {
  Button,
  ButtonDirective,
  ButtonModule,
  CommonModule,
  ConfirmationService,
  CurrencyPipe,
  DatePipe,
  DefaultValueAccessor,
  Fluid,
  FluidModule,
  FormsModule,
  HttpClient,
  HttpParams,
  InputText,
  InputTextModule,
  MessageService,
  NgClass,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgForm,
  NgIf,
  NgModel,
  PrimeTemplate,
  RequiredValidator,
  Ripple,
  RippleModule,
  Toast,
  ToastModule,
  provideHttpClient,
  providePrimeNG,
  withFetch,
  withInterceptors,
  ɵNgNoValidate
} from "./chunk-6JBQ36YE.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionScheduler,
  Component,
  DOCUMENT,
  ElementRef,
  HostBinding,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgZone,
  Renderer2,
  RendererFactory2,
  RuntimeError,
  ViewChild,
  __objRest,
  __spreadProps,
  __spreadValues,
  animate,
  catchError,
  filter,
  inject,
  makeEnvironmentProviders,
  of,
  performanceMarkFeature,
  setClassMetadata,
  state,
  style,
  switchMap,
  tap,
  throwError,
  transition,
  trigger,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵinvalidFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-LDLKK7HI.js";

// node_modules/@angular/platform-browser/fesm2022/animations/async.mjs
var ANIMATION_PREFIX = "@";
var AsyncAnimationRendererFactory = class _AsyncAnimationRendererFactory {
  doc;
  delegate;
  zone;
  animationType;
  moduleImpl;
  _rendererFactoryPromise = null;
  scheduler = null;
  injector = inject(Injector);
  loadingSchedulerFn = inject(\u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN, {
    optional: true
  });
  _engine;
  /**
   *
   * @param moduleImpl allows to provide a mock implmentation (or will load the animation module)
   */
  constructor(doc, delegate, zone, animationType, moduleImpl) {
    this.doc = doc;
    this.delegate = delegate;
    this.zone = zone;
    this.animationType = animationType;
    this.moduleImpl = moduleImpl;
  }
  /** @docs-private */
  ngOnDestroy() {
    this._engine?.flush();
  }
  /**
   * @internal
   */
  loadImpl() {
    const loadFn = () => this.moduleImpl ?? import("./chunk-QF2IKGSC.js").then((m) => m);
    let moduleImplPromise;
    if (this.loadingSchedulerFn) {
      moduleImplPromise = this.loadingSchedulerFn(loadFn);
    } else {
      moduleImplPromise = loadFn();
    }
    return moduleImplPromise.catch((e) => {
      throw new RuntimeError(5300, (typeof ngDevMode === "undefined" || ngDevMode) && "Async loading for animations package was enabled, but loading failed. Angular falls back to using regular rendering. No animations will be displayed and their styles won't be applied.");
    }).then(({
      \u0275createEngine,
      \u0275AnimationRendererFactory
    }) => {
      this._engine = \u0275createEngine(this.animationType, this.doc);
      const rendererFactory = new \u0275AnimationRendererFactory(this.delegate, this._engine, this.zone);
      this.delegate = rendererFactory;
      return rendererFactory;
    });
  }
  /**
   * This method is delegating the renderer creation to the factories.
   * It uses default factory while the animation factory isn't loaded
   * and will rely on the animation factory once it is loaded.
   *
   * Calling this method will trigger as side effect the loading of the animation module
   * if the renderered component uses animations.
   */
  createRenderer(hostElement, rendererType) {
    const renderer = this.delegate.createRenderer(hostElement, rendererType);
    if (renderer.\u0275type === 0) {
      return renderer;
    }
    if (typeof renderer.throwOnSyntheticProps === "boolean") {
      renderer.throwOnSyntheticProps = false;
    }
    const dynamicRenderer = new DynamicDelegationRenderer(renderer);
    if (rendererType?.data?.["animation"] && !this._rendererFactoryPromise) {
      this._rendererFactoryPromise = this.loadImpl();
    }
    this._rendererFactoryPromise?.then((animationRendererFactory) => {
      const animationRenderer = animationRendererFactory.createRenderer(hostElement, rendererType);
      dynamicRenderer.use(animationRenderer);
      this.scheduler ??= this.injector.get(ChangeDetectionScheduler, null, {
        optional: true
      });
      this.scheduler?.notify(
        10
        /* NotificationSource.AsyncAnimationsLoaded */
      );
    }).catch((e) => {
      dynamicRenderer.use(renderer);
    });
    return dynamicRenderer;
  }
  begin() {
    this.delegate.begin?.();
  }
  end() {
    this.delegate.end?.();
  }
  whenRenderingDone() {
    return this.delegate.whenRenderingDone?.() ?? Promise.resolve();
  }
  /**
   * Used during HMR to clear any cached data about a component.
   * @param componentId ID of the component that is being replaced.
   */
  componentReplaced(componentId) {
    this._engine?.flush();
    this.delegate.componentReplaced?.(componentId);
  }
  static \u0275fac = function AsyncAnimationRendererFactory_Factory(__ngFactoryType__) {
    \u0275\u0275invalidFactory();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _AsyncAnimationRendererFactory,
    factory: _AsyncAnimationRendererFactory.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AsyncAnimationRendererFactory, [{
    type: Injectable
  }], () => [{
    type: Document
  }, {
    type: RendererFactory2
  }, {
    type: NgZone
  }, {
    type: void 0
  }, {
    type: Promise
  }], null);
})();
var DynamicDelegationRenderer = class {
  delegate;
  // List of callbacks that need to be replayed on the animation renderer once its loaded
  replay = [];
  \u0275type = 1;
  constructor(delegate) {
    this.delegate = delegate;
  }
  use(impl) {
    this.delegate = impl;
    if (this.replay !== null) {
      for (const fn of this.replay) {
        fn(impl);
      }
      this.replay = null;
    }
  }
  get data() {
    return this.delegate.data;
  }
  destroy() {
    this.replay = null;
    this.delegate.destroy();
  }
  createElement(name, namespace) {
    return this.delegate.createElement(name, namespace);
  }
  createComment(value) {
    return this.delegate.createComment(value);
  }
  createText(value) {
    return this.delegate.createText(value);
  }
  get destroyNode() {
    return this.delegate.destroyNode;
  }
  appendChild(parent, newChild) {
    this.delegate.appendChild(parent, newChild);
  }
  insertBefore(parent, newChild, refChild, isMove) {
    this.delegate.insertBefore(parent, newChild, refChild, isMove);
  }
  removeChild(parent, oldChild, isHostElement) {
    this.delegate.removeChild(parent, oldChild, isHostElement);
  }
  selectRootElement(selectorOrNode, preserveContent) {
    return this.delegate.selectRootElement(selectorOrNode, preserveContent);
  }
  parentNode(node) {
    return this.delegate.parentNode(node);
  }
  nextSibling(node) {
    return this.delegate.nextSibling(node);
  }
  setAttribute(el, name, value, namespace) {
    this.delegate.setAttribute(el, name, value, namespace);
  }
  removeAttribute(el, name, namespace) {
    this.delegate.removeAttribute(el, name, namespace);
  }
  addClass(el, name) {
    this.delegate.addClass(el, name);
  }
  removeClass(el, name) {
    this.delegate.removeClass(el, name);
  }
  setStyle(el, style2, value, flags) {
    this.delegate.setStyle(el, style2, value, flags);
  }
  removeStyle(el, style2, flags) {
    this.delegate.removeStyle(el, style2, flags);
  }
  setProperty(el, name, value) {
    if (this.shouldReplay(name)) {
      this.replay.push((renderer) => renderer.setProperty(el, name, value));
    }
    this.delegate.setProperty(el, name, value);
  }
  setValue(node, value) {
    this.delegate.setValue(node, value);
  }
  listen(target, eventName, callback, options) {
    if (this.shouldReplay(eventName)) {
      this.replay.push((renderer) => renderer.listen(target, eventName, callback, options));
    }
    return this.delegate.listen(target, eventName, callback, options);
  }
  shouldReplay(propOrEventName) {
    return this.replay !== null && propOrEventName.startsWith(ANIMATION_PREFIX);
  }
};
var \u0275ASYNC_ANIMATION_LOADING_SCHEDULER_FN = new InjectionToken(ngDevMode ? "async_animation_loading_scheduler_fn" : "");
function provideAnimationsAsync(type = "animations") {
  performanceMarkFeature("NgAsyncAnimations");
  if (false) {
    type = "noop";
  }
  return makeEnvironmentProviders([{
    provide: RendererFactory2,
    useFactory: (doc, renderer, zone) => {
      return new AsyncAnimationRendererFactory(doc, renderer, zone, type);
    },
    deps: [DOCUMENT, DomRendererFactory2, NgZone]
  }, {
    provide: ANIMATION_MODULE_TYPE,
    useValue: type === "noop" ? "NoopAnimations" : "BrowserAnimations"
  }]);
}

// src/app/users/services/users-api.ts
var UsersApiService = class _UsersApiService {
  http;
  apiUrl = "/api/users";
  // Base URL for users API
  constructor(http) {
    this.http = http;
  }
  getUsers(active, name, page = 1, perPage = 15) {
    let params = new HttpParams().set("page", page.toString()).set("perPage", perPage.toString());
    if (active !== void 0) {
      params = params.set("active", active ? "1" : "0");
    }
    if (name) {
      params = params.set("username", name);
    }
    return this.http.get(this.apiUrl, { params });
  }
  getUser(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  createUser(user) {
    return this.http.post(this.apiUrl, user);
  }
  updateUser(id, user) {
    const _a = user, { id: userId } = _a, userData = __objRest(_a, ["id"]);
    return this.http.put(`${this.apiUrl}/${id}`, userData);
  }
  changeStatus(id, is_active) {
    return this.http.patch(`${this.apiUrl}/${id}/status`, { is_active });
  }
  getUsersType() {
    return this.http.get(`${this.apiUrl}/types`);
  }
  logout() {
    return this.http.delete("/api/auth/logout");
  }
  changePassword(current_password, new_password) {
    return this.http.post("/api/auth/change-password", { current_password, new_password, new_password_confirmation: new_password });
  }
  getWaiters(username) {
    return this.http.get(`/api/users/waiters?username=${username}`);
  }
  static \u0275fac = function UsersApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsersApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsersApiService, factory: _UsersApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsersApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/libs/components/Common.ts
var Common = class {
  getCurrentUser() {
    let user = JSON.parse(sessionStorage.getItem("user") || "{}");
    return user;
  }
};

// src/app/layout/component/app.topbar.ts
var _c0 = ["menu"];
var _c1 = (a0, a1) => ({ "pi ": true, "pi-moon": a0, "pi-sun": a1 });
var AppTopbar = class _AppTopbar extends Common {
  layoutService;
  usersService;
  messageService;
  confirmationService;
  router;
  items;
  menuItems = [];
  menu;
  constructor(layoutService, usersService, messageService, confirmationService, router) {
    super();
    this.layoutService = layoutService;
    this.usersService = usersService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.router = router;
  }
  ngOnInit() {
    this.menuItems = [
      { label: "Change Password", icon: "pi pi-fw pi-key", routerLink: "/change-password" },
      { label: "Logout", icon: "pi pi-fw pi-sign-out", command: () => this.logout() }
    ];
  }
  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state2) => __spreadProps(__spreadValues({}, state2), { darkTheme: !state2.darkTheme }));
  }
  toggleMenu(event) {
    this.menu?.toggle(event);
  }
  logout() {
    sessionStorage.removeItem("user");
    this.confirmationService.confirm({
      message: "Are you sure you want to log out?",
      header: "Confirm Logout",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.usersService.logout().subscribe({
          next: () => {
            this.messageService.add({ severity: "success", summary: "Successful", detail: "Logged out successfully" });
            this.router.navigate(["/auth/login"]);
          },
          error: (err) => {
            this.messageService.add({ severity: "error", summary: "Error", detail: "Logout failed" });
            this.router.navigate(["/auth/login"]);
          }
        });
      }
    });
  }
  static \u0275fac = function AppTopbar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppTopbar)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(UsersApiService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppTopbar, selectors: [["app-topbar"]], viewQuery: function AppTopbar_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.menu = _t.first);
    }
  }, features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService, UsersApiService]), \u0275\u0275InheritDefinitionFeature], decls: 25, vars: 8, consts: [["menu", ""], [1, "layout-topbar"], [1, "layout-topbar-logo-container"], [1, "layout-menu-button", "layout-topbar-action", 3, "click", "pTooltip"], [1, "pi", "pi-bars"], ["routerLink", "/", 1, "layout-topbar-logo"], [1, "layout-topbar-actions"], [1, "layout-config-menu"], ["type", "button", 1, "layout-topbar-action", 3, "click"], [3, "ngClass"], [1, "relative"], ["pStyleClass", "@next", "enterFromClass", "hidden", "enterActiveClass", "animate-scalein", "leaveToClass", "hidden", "leaveActiveClass", "animate-fadeout", 1, "layout-topbar-action", "layout-topbar-action-highlight", 3, "hideOnOutsideClick"], [1, "pi", "pi-palette"], [1, "layout-topbar-menu-content"], [1, "pi", "pi-user"], [3, "model", "popup"]], template: function AppTopbar_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
      \u0275\u0275listener("click", function AppTopbar_Template_button_click_2_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.layoutService.onMenuToggle());
      });
      \u0275\u0275element(3, "i", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 5);
      \u0275\u0275element(5, "app-logo");
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "CAFECITO");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "button", 8);
      \u0275\u0275listener("click", function AppTopbar_Template_button_click_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleDarkMode());
      });
      \u0275\u0275element(11, "i", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "div", 10)(13, "button", 11);
      \u0275\u0275element(14, "i", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "app-configurator");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "div", 13)(17, "button", 8);
      \u0275\u0275listener("click", function AppTopbar_Template_button_click_17_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.toggleMenu($event));
      });
      \u0275\u0275element(18, "i", 14);
      \u0275\u0275elementStart(19, "span");
      \u0275\u0275text(20, "Usuario");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(21, "p-menu", 15, 0);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(23, "p-toast")(24, "p-confirmDialog");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("pTooltip", ctx.getCurrentUser().username + " " + ctx.getCurrentUser().type);
      \u0275\u0275advance(9);
      \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c1, ctx.layoutService.isDarkTheme(), !ctx.layoutService.isDarkTheme()));
      \u0275\u0275advance(2);
      \u0275\u0275property("hideOnOutsideClick", true);
      \u0275\u0275advance(8);
      \u0275\u0275property("model", ctx.menuItems)("popup", true);
    }
  }, dependencies: [RouterModule, RouterLink, CommonModule, NgClass, StyleClassModule, StyleClass, AppConfigurator, Logo, MenuModule, Menu, ConfirmDialogModule, ConfirmDialog, ToastModule, Toast, Tooltip], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppTopbar, [{
    type: Component,
    args: [{
      selector: "app-topbar",
      standalone: true,
      imports: [RouterModule, CommonModule, StyleClassModule, AppConfigurator, Logo, MenuModule, ConfirmDialogModule, ToastModule, Tooltip],
      providers: [MessageService, ConfirmationService, UsersApiService],
      template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()" [pTooltip]="this.getCurrentUser().username+' '+this.getCurrentUser().type">
                <i class="pi pi-bars"></i>
            </button>
            <a class="layout-topbar-logo" routerLink="/">
                <app-logo></app-logo>
                <span>CAFECITO</span>
            </a>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">

                <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                    <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                </button>
                <div class="relative">
                    <button
                        class="layout-topbar-action layout-topbar-action-highlight"
                        pStyleClass="@next"
                        enterFromClass="hidden"
                        enterActiveClass="animate-scalein"
                        leaveToClass="hidden"
                        leaveActiveClass="animate-fadeout"
                        [hideOnOutsideClick]="true"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <app-configurator />
                </div>
            </div>

                <div class="layout-topbar-menu-content">
                    <button type="button" class="layout-topbar-action" (click)="toggleMenu($event)" >
                        <i class="pi pi-user"></i>
                        <span>Usuario</span>
                    </button>
                    <p-menu #menu [model]="menuItems" [popup]="true"></p-menu>
                </div>
        </div>
        <p-toast></p-toast>
        <p-confirmDialog></p-confirmDialog>
    </div>`
    }]
  }], () => [{ type: LayoutService }, { type: UsersApiService }, { type: MessageService }, { type: ConfirmationService }, { type: Router }], { menu: [{
    type: ViewChild,
    args: ["menu"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppTopbar, { className: "AppTopbar", filePath: "src/app/layout/component/app.topbar.ts", lineNumber: 67 });
})();

// src/app/layout/component/app.menuitem.ts
var _c02 = ["app-menuitem", ""];
var _c12 = () => ({ paths: "exact", queryParams: "ignored", matrixParams: "ignored", fragment: "ignored" });
function AppMenuitem_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.item.label);
  }
}
function AppMenuitem_a_2_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
function AppMenuitem_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275listener("click", function AppMenuitem_a_2_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.itemClick($event));
    });
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AppMenuitem_a_2_i_4_Template, 1, 0, "i", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item.styleClass);
    \u0275\u0275attribute("href", ctx_r0.item.url, \u0275\u0275sanitizeUrl)("target", ctx_r0.item.target);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.items);
  }
}
function AppMenuitem_a_3_i_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "i", 9);
  }
}
function AppMenuitem_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275listener("click", function AppMenuitem_a_3_Template_a_click_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.itemClick($event));
    });
    \u0275\u0275element(1, "i", 6);
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AppMenuitem_a_3_i_4_Template, 1, 0, "i", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item.styleClass)("routerLink", ctx_r0.item.routerLink)("routerLinkActiveOptions", ctx_r0.item.routerLinkActiveOptions || \u0275\u0275pureFunction0(14, _c12))("fragment", ctx_r0.item.fragment)("queryParamsHandling", ctx_r0.item.queryParamsHandling)("preserveFragment", ctx_r0.item.preserveFragment)("skipLocationChange", ctx_r0.item.skipLocationChange)("replaceUrl", ctx_r0.item.replaceUrl)("state", ctx_r0.item.state)("queryParams", ctx_r0.item.queryParams);
    \u0275\u0275attribute("target", ctx_r0.item.target);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.item.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.item.items);
  }
}
function AppMenuitem_ul_4_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 12);
  }
  if (rf & 2) {
    const child_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(child_r4["badgeClass"]);
    \u0275\u0275property("item", child_r4)("index", i_r5)("parentKey", ctx_r0.key);
  }
}
function AppMenuitem_ul_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275template(1, AppMenuitem_ul_4_ng_template_1_Template, 1, 5, "ng-template", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("@children", ctx_r0.submenuAnimation);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.item.items);
  }
}
var AppMenuitem = class _AppMenuitem {
  router;
  layoutService;
  item;
  index;
  root;
  parentKey;
  active = false;
  menuSourceSubscription;
  menuResetSubscription;
  key = "";
  constructor(router, layoutService) {
    this.router = router;
    this.layoutService = layoutService;
    this.menuSourceSubscription = this.layoutService.menuSource$.subscribe((value) => {
      Promise.resolve(null).then(() => {
        if (value.routeEvent) {
          this.active = value.key === this.key || value.key.startsWith(this.key + "-") ? true : false;
        } else {
          if (value.key !== this.key && !value.key.startsWith(this.key + "-")) {
            this.active = false;
          }
        }
      });
    });
    this.menuResetSubscription = this.layoutService.resetSource$.subscribe(() => {
      this.active = false;
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe((params) => {
      if (this.item.routerLink) {
        this.updateActiveStateFromRoute();
      }
    });
  }
  ngOnInit() {
    this.key = this.parentKey ? this.parentKey + "-" + this.index : String(this.index);
    if (this.item.routerLink) {
      this.updateActiveStateFromRoute();
    }
  }
  updateActiveStateFromRoute() {
    let activeRoute = this.router.isActive(this.item.routerLink[0], { paths: "exact", queryParams: "ignored", matrixParams: "ignored", fragment: "ignored" });
    if (activeRoute) {
      this.layoutService.onMenuStateChange({ key: this.key, routeEvent: true });
    }
  }
  itemClick(event) {
    if (this.item.disabled) {
      event.preventDefault();
      return;
    }
    if (this.item.command) {
      this.item.command({ originalEvent: event, item: this.item });
    }
    if (this.item.items) {
      this.active = !this.active;
    }
    this.layoutService.onMenuStateChange({ key: this.key });
  }
  get submenuAnimation() {
    return this.root ? "expanded" : this.active ? "expanded" : "collapsed";
  }
  get activeClass() {
    return this.active && !this.root;
  }
  ngOnDestroy() {
    if (this.menuSourceSubscription) {
      this.menuSourceSubscription.unsubscribe();
    }
    if (this.menuResetSubscription) {
      this.menuResetSubscription.unsubscribe();
    }
  }
  static \u0275fac = function AppMenuitem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppMenuitem)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(LayoutService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMenuitem, selectors: [["", "app-menuitem", ""]], hostVars: 4, hostBindings: function AppMenuitem_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("layout-root-menuitem", ctx.root)("active-menuitem", ctx.activeClass);
    }
  }, inputs: { item: "item", index: "index", root: "root", parentKey: "parentKey" }, features: [\u0275\u0275ProvidersFeature([LayoutService])], attrs: _c02, decls: 5, vars: 4, consts: [["class", "layout-menuitem-root-text", 4, "ngIf"], ["tabindex", "0", "pRipple", "", 3, "ngClass", "click", 4, "ngIf"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams", "click", 4, "ngIf"], [4, "ngIf"], [1, "layout-menuitem-root-text"], ["tabindex", "0", "pRipple", "", 3, "click", "ngClass"], [1, "layout-menuitem-icon", 3, "ngClass"], [1, "layout-menuitem-text"], ["class", "pi pi-fw pi-angle-down layout-submenu-toggler", 4, "ngIf"], [1, "pi", "pi-fw", "pi-angle-down", "layout-submenu-toggler"], ["routerLinkActive", "active-route", "tabindex", "0", "pRipple", "", 3, "click", "ngClass", "routerLink", "routerLinkActiveOptions", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "queryParams"], ["ngFor", "", 3, "ngForOf"], ["app-menuitem", "", 3, "item", "index", "parentKey"]], template: function AppMenuitem_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementContainerStart(0);
      \u0275\u0275template(1, AppMenuitem_div_1_Template, 2, 1, "div", 0)(2, AppMenuitem_a_2_Template, 5, 6, "a", 1)(3, AppMenuitem_a_3_Template, 5, 15, "a", 2)(4, AppMenuitem_ul_4_Template, 2, 2, "ul", 3);
      \u0275\u0275elementContainerEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.root && ctx.item.visible !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (!ctx.item.routerLink || ctx.item.items) && ctx.item.visible !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.item.routerLink && !ctx.item.items && ctx.item.visible !== false);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.item.items && ctx.item.visible !== false);
    }
  }, dependencies: [_AppMenuitem, CommonModule, NgClass, NgForOf, NgIf, RouterModule, RouterLink, RouterLinkActive, RippleModule, Ripple], encapsulation: 2, data: { animation: [
    trigger("children", [
      state("collapsed", style({
        height: "0"
      })),
      state("expanded", style({
        height: "*"
      })),
      transition("collapsed <=> expanded", animate("400ms cubic-bezier(0.86, 0, 0.07, 1)"))
    ])
  ] } });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppMenuitem, [{
    type: Component,
    args: [{
      // eslint-disable-next-line @angular-eslint/component-selector
      selector: "[app-menuitem]",
      imports: [CommonModule, RouterModule, RippleModule],
      template: `
        <ng-container>
            <div *ngIf="root && item.visible !== false" class="layout-menuitem-root-text">{{ item.label }}</div>
            <a *ngIf="(!item.routerLink || item.items) && item.visible !== false" [attr.href]="item.url" (click)="itemClick($event)" [ngClass]="item.styleClass" [attr.target]="item.target" tabindex="0" pRipple>
                <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item.label }}</span>
                <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
            </a>
            <a
                *ngIf="item.routerLink && !item.items && item.visible !== false"
                (click)="itemClick($event)"
                [ngClass]="item.styleClass"
                [routerLink]="item.routerLink"
                routerLinkActive="active-route"
                [routerLinkActiveOptions]="item.routerLinkActiveOptions || { paths: 'exact', queryParams: 'ignored', matrixParams: 'ignored', fragment: 'ignored' }"
                [fragment]="item.fragment"
                [queryParamsHandling]="item.queryParamsHandling"
                [preserveFragment]="item.preserveFragment"
                [skipLocationChange]="item.skipLocationChange"
                [replaceUrl]="item.replaceUrl"
                [state]="item.state"
                [queryParams]="item.queryParams"
                [attr.target]="item.target"
                tabindex="0"
                pRipple
            >
                <i [ngClass]="item.icon" class="layout-menuitem-icon"></i>
                <span class="layout-menuitem-text">{{ item.label }}</span>
                <i class="pi pi-fw pi-angle-down layout-submenu-toggler" *ngIf="item.items"></i>
            </a>

            <ul *ngIf="item.items && item.visible !== false" [@children]="submenuAnimation">
                <ng-template ngFor let-child let-i="index" [ngForOf]="item.items">
                    <li app-menuitem [item]="child" [index]="i" [parentKey]="key" [class]="child['badgeClass']"></li>
                </ng-template>
            </ul>
        </ng-container>
    `,
      animations: [
        trigger("children", [
          state("collapsed", style({
            height: "0"
          })),
          state("expanded", style({
            height: "*"
          })),
          transition("collapsed <=> expanded", animate("400ms cubic-bezier(0.86, 0, 0.07, 1)"))
        ])
      ],
      providers: [LayoutService]
    }]
  }], () => [{ type: Router }, { type: LayoutService }], { item: [{
    type: Input
  }], index: [{
    type: Input
  }], root: [{
    type: Input
  }, {
    type: HostBinding,
    args: ["class.layout-root-menuitem"]
  }], parentKey: [{
    type: Input
  }], activeClass: [{
    type: HostBinding,
    args: ["class.active-menuitem"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMenuitem, { className: "AppMenuitem", filePath: "src/app/layout/component/app.menuitem.ts", lineNumber: 72 });
})();

// src/app/layout/component/app.menu.ts
function AppMenu_ng_container_1_li_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const item_r2 = ctx_r0.$implicit;
    const i_r3 = ctx_r0.index;
    \u0275\u0275property("item", item_r2)("index", i_r3)("root", true);
  }
}
function AppMenu_ng_container_1_li_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "li", 5);
  }
}
function AppMenu_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AppMenu_ng_container_1_li_1_Template, 1, 3, "li", 2)(2, AppMenu_ng_container_1_li_2_Template, 1, 0, "li", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !item_r2.separator);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", item_r2.separator);
  }
}
var AppMenu = class _AppMenu extends Common {
  model = [];
  ngOnInit() {
    const type = this.getCurrentUser().type;
    this.model = [
      {
        label: "Principal",
        items: [{ label: "Inicio", icon: "pi pi-fw pi-book", routerLink: ["/"] }]
      },
      {
        label: "Administracion",
        items: [
          { label: "Productos", icon: "pi pi-fw pi-box", routerLink: ["/products"] },
          { label: "Usuarios", icon: "pi pi-fw pi-user", routerLink: ["/users"] }
        ]
      },
      {
        label: "Ordenes",
        icon: "pi pi-fw pi-briefcase",
        routerLink: ["/orders"],
        items: [
          {
            label: "Mis ordenes",
            icon: "pi pi-fw pi-pen-to-square",
            routerLink: ["/orders/me"]
          },
          {
            label: "Historico",
            icon: "pi pi-fw pi-clock",
            routerLink: ["/orders/history"]
          }
        ]
      },
      {
        label: "Procesado",
        icon: "pi pi-fw pi-briefcase",
        routerLink: ["/statuses"],
        items: [
          {
            label: "Comisionado",
            icon: "pi pi-fw pi-dollar",
            routerLink: ["/orders/commissiong"]
          },
          {
            label: "Procesando",
            icon: "pi pi-fw pi-check-circle",
            routerLink: ["/orders/processing"]
          },
          {
            label: "Procesado",
            icon: "pi pi-fw pi-check-circle",
            routerLink: ["/orders/processed"]
          }
        ]
      }
    ];
    if (type !== "ADMINISTRATOR") {
      this.model = this.model.filter((item) => item.label === "Ordenes");
    }
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AppMenu_BaseFactory;
    return function AppMenu_Factory(__ngFactoryType__) {
      return (\u0275AppMenu_BaseFactory || (\u0275AppMenu_BaseFactory = \u0275\u0275getInheritedFactory(_AppMenu)))(__ngFactoryType__ || _AppMenu);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppMenu, selectors: [["app-menu"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "layout-menu"], [4, "ngFor", "ngForOf"], ["app-menuitem", "", 3, "item", "index", "root", 4, "ngIf"], ["class", "menu-separator", 4, "ngIf"], ["app-menuitem", "", 3, "item", "index", "root"], [1, "menu-separator"]], template: function AppMenu_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "ul", 0);
      \u0275\u0275template(1, AppMenu_ng_container_1_Template, 3, 2, "ng-container", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.model);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, AppMenuitem, RouterModule], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppMenu, [{
    type: Component,
    args: [{
      selector: "app-menu",
      standalone: true,
      imports: [CommonModule, AppMenuitem, RouterModule],
      template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppMenu, { className: "AppMenu", filePath: "src/app/layout/component/app.menu.ts", lineNumber: 19 });
})();

// src/app/layout/component/app.sidebar.ts
var AppSidebar = class _AppSidebar {
  el;
  constructor(el) {
    this.el = el;
  }
  static \u0275fac = function AppSidebar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppSidebar)(\u0275\u0275directiveInject(ElementRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppSidebar, selectors: [["app-sidebar"]], decls: 2, vars: 0, consts: [[1, "layout-sidebar"]], template: function AppSidebar_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-menu");
      \u0275\u0275elementEnd();
    }
  }, dependencies: [AppMenu], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppSidebar, [{
    type: Component,
    args: [{
      selector: "app-sidebar",
      standalone: true,
      imports: [AppMenu],
      template: ` <div class="layout-sidebar">
        <app-menu></app-menu>
    </div>`
    }]
  }], () => [{ type: ElementRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppSidebar, { className: "AppSidebar", filePath: "src/app/layout/component/app.sidebar.ts", lineNumber: 12 });
})();

// src/app/layout/component/app.footer.ts
var AppFooter = class _AppFooter extends Common {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275AppFooter_BaseFactory;
    return function AppFooter_Factory(__ngFactoryType__) {
      return (\u0275AppFooter_BaseFactory || (\u0275AppFooter_BaseFactory = \u0275\u0275getInheritedFactory(_AppFooter)))(__ngFactoryType__ || _AppFooter);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppFooter, selectors: [["app-footer"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 1, consts: [[1, "layout-footer"], ["href", "https://devcito.org", "target", "_blank", "rel", "noopener noreferrer", 1, "text-primary", "font-bold", "hover:underline"]], template: function AppFooter_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275text(1, " Cafecitos by ");
      \u0275\u0275domElementStart(2, "a", 1);
      \u0275\u0275text(3, "Devcito");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(4);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1(", user: ", ctx.getCurrentUser().username + " (" + ctx.getCurrentUser().type + ")", " ");
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppFooter, [{
    type: Component,
    args: [{
      standalone: true,
      selector: "app-footer",
      template: `<div class="layout-footer">
        Cafecitos by
        <a href="https://devcito.org" target="_blank" rel="noopener noreferrer" class="text-primary font-bold hover:underline">Devcito</a>, user: {{this.getCurrentUser().username+' ('+this.getCurrentUser().type+')'}}
    </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppFooter, { className: "AppFooter", filePath: "src/app/layout/component/app.footer.ts", lineNumber: 12 });
})();

// src/app/layout/component/app.layout.ts
var AppLayout = class _AppLayout {
  layoutService;
  renderer;
  router;
  overlayMenuOpenSubscription;
  menuOutsideClickListener;
  appSidebar;
  appTopBar;
  constructor(layoutService, renderer, router) {
    this.layoutService = layoutService;
    this.renderer = renderer;
    this.router = router;
    this.overlayMenuOpenSubscription = this.layoutService.overlayOpen$.subscribe(() => {
      if (!this.menuOutsideClickListener) {
        this.menuOutsideClickListener = this.renderer.listen("document", "click", (event) => {
          if (this.isOutsideClicked(event)) {
            this.hideMenu();
          }
        });
      }
      if (this.layoutService.layoutState().staticMenuMobileActive) {
        this.blockBodyScroll();
      }
    });
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.hideMenu();
    });
  }
  isOutsideClicked(event) {
    const sidebarEl = document.querySelector(".layout-sidebar");
    const topbarEl = document.querySelector(".layout-menu-button");
    const eventTarget = event.target;
    return !(sidebarEl?.isSameNode(eventTarget) || sidebarEl?.contains(eventTarget) || topbarEl?.isSameNode(eventTarget) || topbarEl?.contains(eventTarget));
  }
  hideMenu() {
    this.layoutService.layoutState.update((prev) => __spreadProps(__spreadValues({}, prev), { overlayMenuActive: false, staticMenuMobileActive: false, menuHoverActive: false }));
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
      this.menuOutsideClickListener = null;
    }
    this.unblockBodyScroll();
  }
  blockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.add("blocked-scroll");
    } else {
      document.body.className += " blocked-scroll";
    }
  }
  unblockBodyScroll() {
    if (document.body.classList) {
      document.body.classList.remove("blocked-scroll");
    } else {
      document.body.className = document.body.className.replace(new RegExp("(^|\\b)" + "blocked-scroll".split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }
  get containerClass() {
    return {
      "layout-overlay": this.layoutService.layoutConfig().menuMode === "overlay",
      "layout-static": this.layoutService.layoutConfig().menuMode === "static",
      "layout-static-inactive": this.layoutService.layoutState().staticMenuDesktopInactive && this.layoutService.layoutConfig().menuMode === "static",
      "layout-overlay-active": this.layoutService.layoutState().overlayMenuActive,
      "layout-mobile-active": this.layoutService.layoutState().staticMenuMobileActive
    };
  }
  ngOnDestroy() {
    if (this.overlayMenuOpenSubscription) {
      this.overlayMenuOpenSubscription.unsubscribe();
    }
    if (this.menuOutsideClickListener) {
      this.menuOutsideClickListener();
    }
  }
  static \u0275fac = function AppLayout_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppLayout)(\u0275\u0275directiveInject(LayoutService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppLayout, selectors: [["app-layout"]], viewQuery: function AppLayout_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(AppSidebar, 5);
      \u0275\u0275viewQuery(AppTopbar, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.appSidebar = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.appTopBar = _t.first);
    }
  }, decls: 8, vars: 1, consts: [[1, "layout-wrapper", 3, "ngClass"], [1, "layout-main-container"], [1, "layout-main"], [1, "layout-mask", "animate-fadein"]], template: function AppLayout_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-topbar")(2, "app-sidebar");
      \u0275\u0275elementStart(3, "div", 1)(4, "div", 2);
      \u0275\u0275element(5, "router-outlet");
      \u0275\u0275elementEnd();
      \u0275\u0275element(6, "app-footer");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("ngClass", ctx.containerClass);
    }
  }, dependencies: [CommonModule, NgClass, AppTopbar, AppSidebar, RouterModule, RouterOutlet, AppFooter], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppLayout, [{
    type: Component,
    args: [{
      selector: "app-layout",
      standalone: true,
      imports: [CommonModule, AppTopbar, AppSidebar, RouterModule, AppFooter],
      template: `<div class="layout-wrapper" [ngClass]="containerClass">
        <app-topbar></app-topbar>
        <app-sidebar></app-sidebar>
        <div class="layout-main-container">
            <div class="layout-main">
                <router-outlet></router-outlet>
            </div>
            <app-footer></app-footer>
        </div>
        <div class="layout-mask animate-fadein"></div>
    </div> `
    }]
  }], () => [{ type: LayoutService }, { type: Renderer2 }, { type: Router }], { appSidebar: [{
    type: ViewChild,
    args: [AppSidebar]
  }], appTopBar: [{
    type: ViewChild,
    args: [AppTopbar]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppLayout, { className: "AppLayout", filePath: "src/app/layout/component/app.layout.ts", lineNumber: 26 });
})();

// src/app/pages/dashboard/dashboard.ts
var Dashboard = class _Dashboard extends Common {
  route;
  constructor(route) {
    super();
    this.route = route;
    if (!this.getCurrentUser().id) {
      this.route.navigate(["/auth/login"]);
    }
  }
  static \u0275fac = function Dashboard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Dashboard)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Dashboard, selectors: [["app-dashboard"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 0, vars: 0, template: function Dashboard_Template(rf, ctx) {
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Dashboard, [{
    type: Component,
    args: [{
      selector: "app-dashboard",
      template: `

    `
    }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Dashboard, { className: "Dashboard", filePath: "src/app/pages/dashboard/dashboard.ts", lineNumber: 16 });
})();

// src/app/pages/notfound/notfound.ts
var Notfound = class _Notfound {
  static \u0275fac = function Notfound_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Notfound)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Notfound, selectors: [["app-notfound"]], decls: 42, vars: 0, consts: [[1, "flex", "items-center", "justify-center", "min-h-screen", "overflow-hidden"], [1, "flex", "flex-col", "items-center", "justify-center"], ["width", "54", "height", "40", "viewBox", "0 0 54 40", "fill", "none", "xmlns", "http://www.w3.org/2000/svg", 1, "mb-8", "w-32", "shrink-0"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z", "fill", "var(--primary-color)"], ["id", "mask0_1413_1551", "maskUnits", "userSpaceOnUse", "x", "0", "y", "8", "width", "54", "height", "11", 2, "mask-type", "alpha"], ["d", "M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z", "fill", "var(--primary-color)"], ["mask", "url(#mask0_1413_1551)"], ["d", "M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z", "fill", "var(--primary-color)"], [2, "border-radius", "56px", "padding", "0.3rem", "background", "linear-gradient(180deg, color-mix(in srgb, var(--primary-color), transparent 60%) 10%, var(--surface-ground) 30%)"], [1, "w-full", "bg-surface-0", "dark:bg-surface-900", "py-20", "px-8", "sm:px-20", "flex", "flex-col", "items-center", 2, "border-radius", "53px"], [1, "text-primary", "font-bold", "text-3xl"], [1, "text-surface-900", "dark:text-surface-0", "font-bold", "text-3xl", "lg:text-5xl", "mb-2"], [1, "text-surface-600", "dark:text-surface-200", "mb-8"], ["routerLink", "/", 1, "w-full", "flex", "items-center", "py-8", "border-surface-300", "dark:border-surface-500", "border-b"], [1, "flex", "justify-center", "items-center", "border-2", "border-primary", "text-primary", "rounded-border", 2, "height", "3.5rem", "width", "3.5rem"], [1, "pi", "pi-fw", "pi-table", "text-2xl!"], [1, "ml-6", "flex", "flex-col"], [1, "text-surface-900", "dark:text-surface-0", "lg:text-xl", "font-medium", "mb-0", "block"], [1, "text-surface-600", "dark:text-surface-200", "lg:text-xl"], [1, "pi", "pi-fw", "pi-question-circle", "text-2xl!"], [1, "text-surface-900", "dark:text-surface-0", "lg:text-xl", "font-medium", "mb-0"], ["routerLink", "/", 1, "w-full", "flex", "items-center", "mb-8", "py-8", "border-surface-300", "dark:border-surface-500", "border-b"], [1, "pi", "pi-fw", "pi-unlock", "text-2xl!"], ["label", "Go to Dashboard", "routerLink", "/"]], template: function Notfound_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "app-floating-configurator");
      \u0275\u0275elementStart(1, "div", 0)(2, "div", 1);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(3, "svg", 2);
      \u0275\u0275element(4, "path", 3);
      \u0275\u0275elementStart(5, "mask", 4);
      \u0275\u0275element(6, "path", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "g", 6);
      \u0275\u0275element(8, "path", 7);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(9, "div", 8)(10, "div", 9)(11, "span", 10);
      \u0275\u0275text(12, "404");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h1", 11);
      \u0275\u0275text(14, "Not Found");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 12);
      \u0275\u0275text(16, "Requested resource is not available.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 13)(18, "span", 14);
      \u0275\u0275element(19, "i", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "span", 16)(21, "span", 17);
      \u0275\u0275text(22, "Frequently Asked Questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "span", 18);
      \u0275\u0275text(24, "Ultricies mi quis hendrerit dolor.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(25, "a", 13)(26, "span", 14);
      \u0275\u0275element(27, "i", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "span", 16)(29, "span", 20);
      \u0275\u0275text(30, "Solution Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "span", 18);
      \u0275\u0275text(32, "Phasellus faucibus scelerisque eleifend.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "a", 21)(34, "span", 14);
      \u0275\u0275element(35, "i", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "span", 16)(37, "span", 20);
      \u0275\u0275text(38, "Permission Manager");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "span", 18);
      \u0275\u0275text(40, "Accumsan in nisl nisi scelerisque");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(41, "p-button", 23);
      \u0275\u0275elementEnd()()()();
    }
  }, dependencies: [RouterModule, RouterLink, AppFloatingConfigurator, ButtonModule, Button], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Notfound, [{
    type: Component,
    args: [{
      selector: "app-notfound",
      standalone: true,
      imports: [RouterModule, AppFloatingConfigurator, ButtonModule],
      template: ` <app-floating-configurator />
        <div class="flex items-center justify-center min-h-screen overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <svg width="54" height="40" viewBox="0 0 54 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="mb-8 w-32 shrink-0">
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.1637 19.2467C17.1566 19.4033 17.1529 19.561 17.1529 19.7194C17.1529 25.3503 21.7203 29.915 27.3546 29.915C32.9887 29.915 37.5561 25.3503 37.5561 19.7194C37.5561 19.5572 37.5524 19.3959 37.5449 19.2355C38.5617 19.0801 39.5759 18.9013 40.5867 18.6994L40.6926 18.6782C40.7191 19.0218 40.7326 19.369 40.7326 19.7194C40.7326 27.1036 34.743 33.0896 27.3546 33.0896C19.966 33.0896 13.9765 27.1036 13.9765 19.7194C13.9765 19.374 13.9896 19.0316 14.0154 18.6927L14.0486 18.6994C15.0837 18.9062 16.1223 19.0886 17.1637 19.2467ZM33.3284 11.4538C31.6493 10.2396 29.5855 9.52381 27.3546 9.52381C25.1195 9.52381 23.0524 10.2421 21.3717 11.4603C20.0078 11.3232 18.6475 11.1387 17.2933 10.907C19.7453 8.11308 23.3438 6.34921 27.3546 6.34921C31.36 6.34921 34.9543 8.10844 37.4061 10.896C36.0521 11.1292 34.692 11.3152 33.3284 11.4538ZM43.826 18.0518C43.881 18.6003 43.9091 19.1566 43.9091 19.7194C43.9091 28.8568 36.4973 36.2642 27.3546 36.2642C18.2117 36.2642 10.8 28.8568 10.8 19.7194C10.8 19.1615 10.8276 18.61 10.8816 18.0663L7.75383 17.4411C7.66775 18.1886 7.62354 18.9488 7.62354 19.7194C7.62354 30.6102 16.4574 39.4388 27.3546 39.4388C38.2517 39.4388 47.0855 30.6102 47.0855 19.7194C47.0855 18.9439 47.0407 18.1789 46.9536 17.4267L43.826 18.0518ZM44.2613 9.54743L40.9084 10.2176C37.9134 5.95821 32.9593 3.1746 27.3546 3.1746C21.7442 3.1746 16.7856 5.96385 13.7915 10.2305L10.4399 9.56057C13.892 3.83178 20.1756 0 27.3546 0C34.5281 0 40.8075 3.82591 44.2613 9.54743Z"
                        fill="var(--primary-color)"
                    />
                    <mask id="mask0_1413_1551" style="mask-type: alpha" maskUnits="userSpaceOnUse" x="0" y="8" width="54" height="11">
                        <path d="M27 18.3652C10.5114 19.1944 0 8.88892 0 8.88892C0 8.88892 16.5176 14.5866 27 14.5866C37.4824 14.5866 54 8.88892 54 8.88892C54 8.88892 43.4886 17.5361 27 18.3652Z" fill="var(--primary-color)" />
                    </mask>
                    <g mask="url(#mask0_1413_1551)">
                        <path
                            d="M-4.673e-05 8.88887L3.73084 -1.91434L-8.00806 17.0473L-4.673e-05 8.88887ZM27 18.3652L26.4253 6.95109L27 18.3652ZM54 8.88887L61.2673 17.7127L50.2691 -1.91434L54 8.88887ZM-4.673e-05 8.88887C-8.00806 17.0473 -8.00469 17.0505 -8.00132 17.0538C-8.00018 17.055 -7.99675 17.0583 -7.9944 17.0607C-7.98963 17.0653 -7.98474 17.0701 -7.97966 17.075C-7.96949 17.0849 -7.95863 17.0955 -7.94707 17.1066C-7.92401 17.129 -7.89809 17.1539 -7.86944 17.1812C-7.8122 17.236 -7.74377 17.3005 -7.66436 17.3743C-7.50567 17.5218 -7.30269 17.7063 -7.05645 17.9221C-6.56467 18.3532 -5.89662 18.9125 -5.06089 19.5534C-3.39603 20.83 -1.02575 22.4605 1.98012 24.0457C7.97874 27.2091 16.7723 30.3226 27.5746 29.7793L26.4253 6.95109C20.7391 7.23699 16.0326 5.61231 12.6534 3.83024C10.9703 2.94267 9.68222 2.04866 8.86091 1.41888C8.45356 1.10653 8.17155 0.867278 8.0241 0.738027C7.95072 0.673671 7.91178 0.637576 7.90841 0.634492C7.90682 0.63298 7.91419 0.639805 7.93071 0.65557C7.93897 0.663455 7.94952 0.673589 7.96235 0.686039C7.96883 0.692262 7.97582 0.699075 7.98338 0.706471C7.98719 0.710167 7.99113 0.714014 7.99526 0.718014C7.99729 0.720008 8.00047 0.723119 8.00148 0.724116C8.00466 0.727265 8.00796 0.730446 -4.673e-05 8.88887ZM27.5746 29.7793C37.6904 29.2706 45.9416 26.3684 51.6602 23.6054C54.5296 22.2191 56.8064 20.8465 58.4186 19.7784C59.2265 19.2431 59.873 18.7805 60.3494 18.4257C60.5878 18.2482 60.7841 18.0971 60.9374 17.977C61.014 17.9169 61.0799 17.8645 61.1349 17.8203C61.1624 17.7981 61.1872 17.7781 61.2093 17.7602C61.2203 17.7512 61.2307 17.7427 61.2403 17.7348C61.2452 17.7308 61.2499 17.727 61.2544 17.7233C61.2566 17.7215 61.2598 17.7188 61.261 17.7179C61.2642 17.7153 61.2673 17.7127 54 8.88887C46.7326 0.0650536 46.7357 0.0625219 46.7387 0.0600241C46.7397 0.0592345 46.7427 0.0567658 46.7446 0.0551857C46.7485 0.0520238 46.7521 0.0489887 46.7557 0.0460799C46.7628 0.0402623 46.7694 0.0349487 46.7753 0.0301318C46.7871 0.0204986 46.7966 0.0128495 46.8037 0.00712562C46.818 -0.00431848 46.8228 -0.00808311 46.8184 -0.00463784C46.8096 0.00228345 46.764 0.0378652 46.6828 0.0983779C46.5199 0.219675 46.2165 0.439161 45.7812 0.727519C44.9072 1.30663 43.5257 2.14765 41.7061 3.02677C38.0469 4.79468 32.7981 6.63058 26.4253 6.95109L27.5746 29.7793ZM54 8.88887C50.2691 -1.91433 50.27 -1.91467 50.271 -1.91498C50.2712 -1.91506 50.272 -1.91535 50.2724 -1.9155C50.2733 -1.91581 50.274 -1.91602 50.2743 -1.91616C50.2752 -1.91643 50.275 -1.91636 50.2738 -1.91595C50.2714 -1.91515 50.2652 -1.91302 50.2552 -1.9096C50.2351 -1.90276 50.1999 -1.89078 50.1503 -1.874C50.0509 -1.84043 49.8938 -1.78773 49.6844 -1.71863C49.2652 -1.58031 48.6387 -1.377 47.8481 -1.13035C46.2609 -0.635237 44.0427 0.0249875 41.5325 0.6823C36.215 2.07471 30.6736 3.15796 27 3.15796V26.0151C33.8087 26.0151 41.7672 24.2495 47.3292 22.7931C50.2586 22.026 52.825 21.2618 54.6625 20.6886C55.5842 20.4011 56.33 20.1593 56.8551 19.986C57.1178 19.8993 57.3258 19.8296 57.4735 19.7797C57.5474 19.7548 57.6062 19.7348 57.6493 19.72C57.6709 19.7127 57.6885 19.7066 57.7021 19.7019C57.7089 19.6996 57.7147 19.6976 57.7195 19.696C57.7219 19.6952 57.7241 19.6944 57.726 19.6938C57.7269 19.6934 57.7281 19.693 57.7286 19.6929C57.7298 19.6924 57.7309 19.692 54 8.88887ZM27 3.15796C23.3263 3.15796 17.7849 2.07471 12.4674 0.6823C9.95717 0.0249875 7.73904 -0.635237 6.15184 -1.13035C5.36118 -1.377 4.73467 -1.58031 4.3155 -1.71863C4.10609 -1.78773 3.94899 -1.84043 3.84961 -1.874C3.79994 -1.89078 3.76474 -1.90276 3.74471 -1.9096C3.73469 -1.91302 3.72848 -1.91515 3.72613 -1.91595C3.72496 -1.91636 3.72476 -1.91643 3.72554 -1.91616C3.72593 -1.91602 3.72657 -1.91581 3.72745 -1.9155C3.72789 -1.91535 3.72874 -1.91506 3.72896 -1.91498C3.72987 -1.91467 3.73084 -1.91433 -4.673e-05 8.88887C-3.73093 19.692 -3.72983 19.6924 -3.72868 19.6929C-3.72821 19.693 -3.72698 19.6934 -3.72603 19.6938C-3.72415 19.6944 -3.72201 19.6952 -3.71961 19.696C-3.71482 19.6976 -3.70901 19.6996 -3.7022 19.7019C-3.68858 19.7066 -3.67095 19.7127 -3.6494 19.72C-3.60629 19.7348 -3.54745 19.7548 -3.47359 19.7797C-3.32589 19.8296 -3.11788 19.8993 -2.85516 19.986C-2.33008 20.1593 -1.58425 20.4011 -0.662589 20.6886C1.17485 21.2618 3.74125 22.026 6.67073 22.7931C12.2327 24.2495 20.1913 26.0151 27 26.0151V3.15796Z"
                            fill="var(--primary-color)"
                        />
                    </g>
                </svg>
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, color-mix(in srgb, var(--primary-color), transparent 60%) 10%, var(--surface-ground) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20 flex flex-col items-center" style="border-radius: 53px">
                        <span class="text-primary font-bold text-3xl">404</span>
                        <h1 class="text-surface-900 dark:text-surface-0 font-bold text-3xl lg:text-5xl mb-2">Not Found</h1>
                        <div class="text-surface-600 dark:text-surface-200 mb-8">Requested resource is not available.</div>
                        <a routerLink="/" class="w-full flex items-center py-8 border-surface-300 dark:border-surface-500 border-b">
                            <span class="flex justify-center items-center border-2 border-primary text-primary rounded-border" style="height: 3.5rem; width: 3.5rem">
                                <i class="pi pi-fw pi-table text-2xl!"></i>
                            </span>
                            <span class="ml-6 flex flex-col">
                                <span class="text-surface-900 dark:text-surface-0 lg:text-xl font-medium mb-0 block">Frequently Asked Questions</span>
                                <span class="text-surface-600 dark:text-surface-200 lg:text-xl">Ultricies mi quis hendrerit dolor.</span>
                            </span>
                        </a>
                        <a routerLink="/" class="w-full flex items-center py-8 border-surface-300 dark:border-surface-500 border-b">
                            <span class="flex justify-center items-center border-2 border-primary text-primary rounded-border" style="height: 3.5rem; width: 3.5rem">
                                <i class="pi pi-fw pi-question-circle text-2xl!"></i>
                            </span>
                            <span class="ml-6 flex flex-col">
                                <span class="text-surface-900 dark:text-surface-0 lg:text-xl font-medium mb-0">Solution Center</span>
                                <span class="text-surface-600 dark:text-surface-200 lg:text-xl">Phasellus faucibus scelerisque eleifend.</span>
                            </span>
                        </a>
                        <a routerLink="/" class="w-full flex items-center mb-8 py-8 border-surface-300 dark:border-surface-500 border-b">
                            <span class="flex justify-center items-center border-2 border-primary text-primary rounded-border" style="height: 3.5rem; width: 3.5rem">
                                <i class="pi pi-fw pi-unlock text-2xl!"></i>
                            </span>
                            <span class="ml-6 flex flex-col">
                                <span class="text-surface-900 dark:text-surface-0 lg:text-xl font-medium mb-0">Permission Manager</span>
                                <span class="text-surface-600 dark:text-surface-200 lg:text-xl">Accumsan in nisl nisi scelerisque</span>
                            </span>
                        </a>
                        <p-button label="Go to Dashboard" routerLink="/" />
                    </div>
                </div>
            </div>
        </div>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Notfound, { className: "Notfound", filePath: "src/app/pages/notfound/notfound.ts", lineNumber: 68 });
})();

// src/app/products/services/products-api.ts
var ProductsApiService = class _ProductsApiService {
  http;
  apiUrl = "/api/products";
  constructor(http) {
    this.http = http;
  }
  getProducts(active, name, page = 1, perPage = 15) {
    let params = new HttpParams().set("page", page.toString()).set("perPage", perPage.toString());
    if (active !== void 0) {
      params = params.set("active", active ? "1" : "0");
    }
    if (name) {
      params = params.set("name", name);
    }
    return this.http.get(this.apiUrl, { params });
  }
  createProduct(product) {
    return this.http.post(this.apiUrl, product);
  }
  updateProduct(id, product) {
    const _a = product, { id: productId } = _a, productData = __objRest(_a, ["id"]);
    return this.http.put(`${this.apiUrl}/${id}`, productData);
  }
  changeStatus(id, is_active) {
    return this.http.patch(`${this.apiUrl}/${id}/status`, { is_active });
  }
  uploadImage(id, image) {
    const formData = new FormData();
    formData.append("image", image);
    return this.http.post(`${this.apiUrl}/${id}/image`, formData);
  }
  getProductTypes() {
    return this.http.get(`${this.apiUrl}/types`);
  }
  static \u0275fac = function ProductsApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductsApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductsApiService, factory: _ProductsApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductsApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/products/component/products.ts
var _c03 = () => ({ "min-width": "75rem" });
var _c13 = () => ({ width: "450px" });
function Products_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 11);
    \u0275\u0275listener("onClick", function Products_ng_template_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
  }
}
function Products_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 12);
    \u0275\u0275text(1, "Status ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function Products_ng_template_5_Template_p_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.active, $event) || (ctx_r2.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function Products_ng_template_5_Template_p_select_onChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onChangeActive($event.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.active);
    \u0275\u0275property("options", ctx_r2.dropdownItems)("optionValue", "code");
  }
}
function Products_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "h5", 15);
    \u0275\u0275text(2, "Manage Products");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-iconfield");
    \u0275\u0275element(4, "p-inputicon", 16);
    \u0275\u0275elementStart(5, "input", 17, 6);
    \u0275\u0275listener("keydown.enter", function Products_ng_template_9_Template_input_keydown_enter_5_listener() {
      \u0275\u0275restoreView(_r5);
      const search_r6 = \u0275\u0275reference(6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterByName(search_r6.value));
    })("blur", function Products_ng_template_9_Template_input_blur_5_listener() {
      \u0275\u0275restoreView(_r5);
      const search_r6 = \u0275\u0275reference(6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterByName(search_r6.value));
    });
    \u0275\u0275elementEnd()()();
  }
}
function Products_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 18);
    \u0275\u0275text(2, "Id");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "th", 19);
    \u0275\u0275elementStart(4, "th", 20);
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 21);
    \u0275\u0275text(7, "Image");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 19);
    \u0275\u0275text(9, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 22);
    \u0275\u0275text(11, "Client Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 22);
    \u0275\u0275text(13, "Animation Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 22);
    \u0275\u0275text(15, "Waiter Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th", 22);
    \u0275\u0275text(17, "Waiter Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th", 18);
    \u0275\u0275text(19, "Active");
    \u0275\u0275elementEnd()();
  }
}
function Products_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "p-button", 23);
    \u0275\u0275listener("click", function Products_ng_template_13_Template_p_button_click_4_listener() {
      const product_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editProduct(product_r8));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p-button", 24);
    \u0275\u0275listener("click", function Products_ng_template_13_Template_p_button_click_5_listener() {
      const product_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeStatus(product_r8));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275element(9, "img", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "td");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "td");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "td");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "td");
    \u0275\u0275element(25, "p-tag", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r8.id);
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", product_r8.is_active ? "pi pi-eye-slash" : "pi pi-eye")("severity", product_r8.is_active ? "danger" : "success")("pTooltip", product_r8.is_active ? "Inactive" : "Active");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r8.description);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r2.createImageUrl(product_r8.id), \u0275\u0275sanitizeUrl)("alt", product_r8.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r8.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(14, 14, product_r8.client_price, "BOB"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(17, 17, product_r8.animation_price, "BOB"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 20, product_r8.waiter_price, "BOB"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 23, product_r8.waiter_commission, "BOB"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", product_r8.is_active ? "ACTIVE" : "INACTIVE")("severity", product_r8.is_active ? "success" : "danger");
  }
}
function Products_ng_template_17_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 47);
    \u0275\u0275text(1, "Name is required.");
    \u0275\u0275elementEnd();
  }
}
function Products_ng_template_17_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "label");
    \u0275\u0275text(2, "Current Image");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r2.createImageUrl(ctx_r2.product.id), \u0275\u0275sanitizeUrl)("alt", ctx_r2.product.description);
  }
}
function Products_ng_template_17_div_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "label");
    \u0275\u0275text(2, "New Image Preview");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "img", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("src", ctx_r2.newImagePreviewUrl, \u0275\u0275sanitizeUrl)("alt", ctx_r2.product.description);
  }
}
function Products_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div")(2, "label", 28);
    \u0275\u0275text(3, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function Products_ng_template_17_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.description, $event) || (ctx_r2.product.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, Products_ng_template_17_small_5_Template, 2, 0, "small", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "label", 31);
    \u0275\u0275text(8, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p-select", 32);
    \u0275\u0275twoWayListener("ngModelChange", function Products_ng_template_17_Template_p_select_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.type, $event) || (ctx_r2.product.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div")(11, "label", 33);
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p-select", 34);
    \u0275\u0275twoWayListener("ngModelChange", function Products_ng_template_17_Template_p_select_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.is_active, $event) || (ctx_r2.product.is_active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "label", 35);
    \u0275\u0275text(16, "Client Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p-inputnumber", 36);
    \u0275\u0275twoWayListener("ngModelChange", function Products_ng_template_17_Template_p_inputnumber_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.client_price, $event) || (ctx_r2.product.client_price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div")(19, "label", 37);
    \u0275\u0275text(20, "Animation Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "p-inputnumber", 38);
    \u0275\u0275twoWayListener("ngModelChange", function Products_ng_template_17_Template_p_inputnumber_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.animation_price, $event) || (ctx_r2.product.animation_price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "label", 39);
    \u0275\u0275text(24, "Waiter Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p-inputnumber", 40);
    \u0275\u0275twoWayListener("ngModelChange", function Products_ng_template_17_Template_p_inputnumber_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.waiter_price, $event) || (ctx_r2.product.waiter_price = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div")(27, "label", 41);
    \u0275\u0275text(28, "Waiter Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "p-inputnumber", 42);
    \u0275\u0275twoWayListener("ngModelChange", function Products_ng_template_17_Template_p_inputnumber_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product.waiter_commission, $event) || (ctx_r2.product.waiter_commission = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(30, Products_ng_template_17_div_30_Template, 4, 2, "div", 43);
    \u0275\u0275elementStart(31, "div", 44)(32, "label", 45);
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p-fileupload", 46);
    \u0275\u0275listener("onSelect", function Products_ng_template_17_Template_p_fileupload_onSelect_34_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onUpload($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, Products_ng_template_17_div_35_Template, 4, 2, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.submitted && !ctx_r2.product.description);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r2.productTypes);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.type);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r2.statusOptions);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.is_active);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.client_price);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.animation_price);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.waiter_price);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product.waiter_commission);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.product.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r2.product.id ? "Change" : "Upload", " Image");
    \u0275\u0275advance();
    \u0275\u0275property("maxFileSize", 5e6);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.newImagePreviewUrl);
  }
}
function Products_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 50);
    \u0275\u0275listener("click", function Products_ng_template_18_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 51);
    \u0275\u0275listener("click", function Products_ng_template_18_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveProduct());
    });
    \u0275\u0275elementEnd();
  }
}
var Products = class _Products {
  productService;
  messageService;
  confirmationService;
  sanitizer;
  productDialog = false;
  submitted = false;
  product;
  uploadedFile;
  newImagePreviewUrl = null;
  imageCacheBuster = /* @__PURE__ */ new Map();
  lista = [];
  active = true;
  name = "";
  page = 1;
  perPage = 10;
  pagination;
  first = 0;
  total;
  dropdownItems = [
    { name: "Active", code: true },
    { name: "Inactive", code: false }
  ];
  productTypes = [];
  statusOptions = [{ name: "Active", value: true }, { name: "Inactive", value: false }];
  constructor(productService, messageService, confirmationService, sanitizer) {
    this.productService = productService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.sanitizer = sanitizer;
  }
  ngOnInit() {
    this.getProducts();
    this.loadProductTypes();
  }
  loadProductTypes() {
    this.productService.getProductTypes().subscribe((types) => {
      this.productTypes = types;
    });
  }
  createImageUrl(id) {
    const cacheBuster = this.imageCacheBuster.get(id) || "";
    const imageUrl = `/api/products/${id}/image?_=${cacheBuster}`;
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
  getProducts() {
    this.productService.getProducts(this.active, this.name, this.page, this.perPage).subscribe({
      next: (response) => {
        this.lista = response.data;
        this.pagination = response.pagination;
        this.total = this.pagination.total;
      },
      error: (error) => {
        this.messageService.add({ severity: "error", summary: "Error", detail: "Error fetching products" });
      }
    });
  }
  filterByName(name) {
    this.name = name;
    this.page = 1;
    this.first = 0;
    this.getProducts();
  }
  onChangeActive($event) {
    this.active = $event;
    this.getProducts();
  }
  onPageChange($event) {
    this.first = $event.first;
    this.page = Math.floor($event.first / $event.rows) + 1;
    this.getProducts();
  }
  openNew() {
    this.product = {};
    this.product.is_active = true;
    if (this.productTypes.length > 0) {
      this.product.type = this.productTypes[0].value;
    }
    this.submitted = false;
    this.productDialog = true;
  }
  editProduct(product) {
    this.product = __spreadValues({}, product);
    this.productDialog = true;
  }
  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
    this.newImagePreviewUrl = null;
  }
  saveProduct() {
    this.submitted = true;
    if (this.product.description?.trim()) {
      const productAction = this.product.id ? this.productService.updateProduct(this.product.id, this.product) : this.productService.createProduct(this.product);
      productAction.subscribe({
        next: (response) => {
          const successMessage = this.product.id ? "Product Updated" : "Product Created";
          this.messageService.add({ severity: "success", summary: "Successful", detail: successMessage });
          if (this.uploadedFile) {
            this.uploadImage(response.id).subscribe(() => {
              this.getProducts();
              this.hideDialog();
            });
          } else {
            this.getProducts();
            this.hideDialog();
          }
        },
        error: (err) => {
          const errorMessage = this.product.id ? "Error updating product" : "Error creating product";
          this.messageService.add({ severity: "error", summary: "Error", detail: errorMessage });
        }
      });
    }
  }
  changeStatus(product) {
    this.confirmationService.confirm({
      message: "Are you sure you want to change the status of " + product.description + "?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.productService.changeStatus(product.id, !product.is_active).subscribe({
          next: () => {
            this.messageService.add({ severity: "success", summary: "Successful", detail: "Product Status Changed" });
            this.getProducts();
          },
          error: (err) => {
            this.messageService.add({ severity: "error", summary: "Error", detail: "Error changing status" });
          }
        });
      }
    });
  }
  onUpload(event) {
    this.uploadedFile = event.files[0];
    this.newImagePreviewUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.uploadedFile));
  }
  uploadImage(productId) {
    return this.productService.uploadImage(productId, this.uploadedFile).pipe(tap(() => {
      this.messageService.add({ severity: "success", summary: "Success", detail: "Image uploaded" });
      this.uploadedFile = null;
      this.imageCacheBuster.set(productId, (/* @__PURE__ */ new Date()).getTime());
    }), catchError((err) => {
      this.messageService.add({ severity: "error", summary: "Error", detail: "Image upload failed" });
      return throwError(() => err);
    }));
  }
  static \u0275fac = function Products_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Products)(\u0275\u0275directiveInject(ProductsApiService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(DomSanitizer));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Products, selectors: [["app-products"]], features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 19, vars: 15, consts: [["start", ""], ["end", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["search", ""], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} products", 3, "onPage", "firstChange", "value", "rows", "paginator", "lazy", "tableStyle", "rowHover", "totalRecords", "first", "showCurrentPageReport"], ["header", "Product Details", 3, "visibleChange", "visible", "modal"], ["pTemplate", "content"], ["pTemplate", "footer"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 1, "mr-2", 3, "onClick"], ["for", "active", 1, "mr-2"], ["id", "state", "optionLabel", "name", "placeholder", "Select One", 1, "w-full", 3, "ngModelChange", "onChange", "ngModel", "options", "optionValue"], [1, "flex", "items-center", "justify-between"], [1, "m-0"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Buscar...", 3, "keydown.enter", "blur"], [2, "min-width", "3rem"], [2, "min-width", "10rem"], [2, "min-width", "16rem"], [2, "width", "10rem"], [2, "min-width", "5rem"], ["icon", "pi pi-pencil", "severity", "info", "pTooltip", "Edit Product", 1, "mr-2", 3, "click"], [3, "click", "icon", "severity", "pTooltip"], ["onerror", "this.style.display='none'", 1, "product-image-thumbnail", 3, "src", "alt"], [3, "value", "severity"], [1, "flex", "flex-col", "gap-6"], ["for", "description", 1, "block", "font-bold", "mb-3"], ["type", "text", "pInputText", "", "id", "description", "required", "", "autofocus", "", "fluid", "", 3, "ngModelChange", "ngModel"], ["class", "p-error", 4, "ngIf"], ["for", "type", 1, "block", "font-bold", "mb-3"], ["id", "type", "optionLabel", "name", "optionValue", "value", "placeholder", "Select a Type", "fluid", "", 3, "ngModelChange", "options", "ngModel"], ["for", "status", 1, "block", "font-bold", "mb-3"], ["id", "status", "optionLabel", "name", "optionValue", "value", "placeholder", "Select a Status", "fluid", "", 3, "ngModelChange", "options", "ngModel"], ["for", "client_price", 1, "block", "font-bold", "mb-3"], ["id", "client_price", "mode", "currency", "currency", "USD", "locale", "en-US", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "animation_price", 1, "block", "font-bold", "mb-3"], ["id", "animation_price", "mode", "currency", "currency", "USD", "locale", "en-US", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "waiter_price", 1, "block", "font-bold", "mb-3"], ["id", "waiter_price", "mode", "currency", "currency", "USD", "locale", "en-US", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "waiter_commission", 1, "block", "font-bold", "mb-3"], ["id", "waiter_commission", "mode", "currency", "currency", "USD", "locale", "en-US", "fluid", "", 3, "ngModelChange", "ngModel"], ["class", "field", 4, "ngIf"], [1, "field"], ["for", "image"], ["mode", "basic", "name", "image", "url", "./", "accept", "image/*", 3, "onSelect", "maxFileSize"], [1, "p-error"], ["onerror", "this.style.display='none'", 1, "product-image-preview", 3, "src", "alt"], [1, "product-image-preview", 3, "src", "alt"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", 3, "click"], ["label", "Save", "icon", "pi pi-check", 3, "click"]], template: function Products_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast")(1, "p-confirmdialog");
      \u0275\u0275elementStart(2, "p-toolbar");
      \u0275\u0275template(3, Products_ng_template_3_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, Products_ng_template_5_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-table", 7, 2);
      \u0275\u0275listener("onPage", function Products_Template_p_table_onPage_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      });
      \u0275\u0275twoWayListener("firstChange", function Products_Template_p_table_firstChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.first, $event) || (ctx.first = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(9, Products_ng_template_9_Template, 7, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(11, Products_ng_template_11_Template, 20, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(13, Products_ng_template_13_Template, 26, 26, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " >\n");
      \u0275\u0275elementStart(16, "p-dialog", 8);
      \u0275\u0275twoWayListener("visibleChange", function Products_Template_p_dialog_visibleChange_16_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.productDialog, $event) || (ctx.productDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(17, Products_ng_template_17_Template, 36, 14, "ng-template", 9)(18, Products_ng_template_18_Template, 2, 0, "ng-template", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.lista)("rows", ctx.perPage)("paginator", true)("lazy", true)("tableStyle", \u0275\u0275pureFunction0(13, _c03))("rowHover", true)("totalRecords", ctx.total);
      \u0275\u0275twoWayProperty("first", ctx.first);
      \u0275\u0275property("showCurrentPageReport", true);
      \u0275\u0275advance(9);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(14, _c13));
      \u0275\u0275twoWayProperty("visible", ctx.productDialog);
      \u0275\u0275property("modal", true);
    }
  }, dependencies: [CommonModule, NgIf, ToolbarModule, Toolbar, PrimeTemplate, ButtonModule, Button, TableModule, Table, IconFieldModule, IconField, InputIconModule, InputIcon, SelectModule, Select, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, NgModel, InputTextModule, InputText, DialogModule, Dialog, InputNumberModule, InputNumber, FileUploadModule, FileUpload, ToastModule, Toast, ConfirmDialogModule, ConfirmDialog, TagModule, Tag, Tooltip, CurrencyPipe], styles: ["\n\n.product-image-thumbnail[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  border-radius: 4px;\n  box-shadow:\n    0 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0 4px 5px 0 rgba(0, 0, 0, 0.14),\n    0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.product-image-preview[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 4px;\n  margin-top: 0.5rem;\n  box-shadow:\n    0 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0 4px 5px 0 rgba(0, 0, 0, 0.14),\n    0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=products.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Products, [{
    type: Component,
    args: [{ selector: "app-products", imports: [
      CommonModule,
      ToolbarModule,
      ButtonModule,
      TableModule,
      IconFieldModule,
      InputIconModule,
      SelectModule,
      FormsModule,
      InputTextModule,
      DialogModule,
      InputNumberModule,
      FileUploadModule,
      ToastModule,
      ConfirmDialogModule,
      CurrencyPipe,
      TagModule,
      Tooltip
    ], providers: [MessageService, ConfirmationService], template: `<p-toast></p-toast>\r
<p-confirmdialog></p-confirmdialog>\r
\r
<p-toolbar>\r
    <ng-template #start>\r
        <p-button label="New" icon="pi pi-plus" severity="secondary"\r
            class="mr-2" (onClick)="openNew()" />\r
    </ng-template>\r
\r
    <ng-template #end>\r
        <label for="active" class="mr-2">Status </label>\r
        <p-select id="state" [(ngModel)]="active" [options]="dropdownItems"\r
            optionLabel="name" [optionValue]="'code'"\r
            (onChange)="onChangeActive($event.value)" placeholder="Select One"\r
            class="w-full"></p-select>\r
    </ng-template>\r
</p-toolbar>\r
\r
<p-table #dt [value]="lista" [rows]="perPage" [paginator]="true" [lazy]="true"\r
    [tableStyle]="{ 'min-width': '75rem' }"\r
    [rowHover]="true" (onPage)="onPageChange($event)" [totalRecords]="total"\r
    dataKey="id" [(first)]="first"\r
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} products"\r
    [showCurrentPageReport]="true">\r
    <ng-template #caption>\r
        <div class="flex items-center justify-between">\r
            <h5 class="m-0">Manage Products</h5>\r
            <p-iconfield>\r
                <p-inputicon class="pi pi-search" />\r
                <input pInputText type="text" #search placeholder="Buscar..."\r
                    (keydown.enter)="filterByName(search.value)" (blur)="filterByName(search.value)" />\r
            </p-iconfield>\r
        </div>\r
    </ng-template>\r
    <ng-template #header>\r
        <tr>\r
            <th style="min-width: 3rem">Id</th>\r
            <th style="min-width: 10rem"></th>\r
            <th style="min-width:16rem">Name</th>\r
            <th style="width:10rem">Image</th>\r
            <th style="min-width:10rem">Type</th>\r
            <th style="min-width:5rem">Client Price</th>\r
            <th style="min-width:5rem">Animation Price</th>\r
            <th style="min-width:5rem">Waiter Price</th>\r
            <th style="min-width:5rem">Waiter Commission</th>\r
            <th style="min-width: 3rem">Active</th>\r
\r
        </tr>\r
    </ng-template>\r
    <ng-template #body let-product>\r
        <tr>\r
            <td>{{product.id}}</td>\r
            <td>\r
                <p-button icon="pi pi-pencil" severity="info" class="mr-2"\r
                    (click)="editProduct(product)"\r
                    pTooltip="Edit Product"></p-button>\r
                <p-button\r
                    [icon]="product.is_active ? 'pi pi-eye-slash' : 'pi pi-eye'"\r
                    [severity]="product.is_active ? 'danger' : 'success'"\r
                    (click)="changeStatus(product)"\r
                    [pTooltip]="product.is_active ? 'Inactive' : 'Active'"></p-button>\r
            </td>\r
            <td>{{product.description}}</td>\r
            <td>\r
                <img [src]="createImageUrl(product.id)"\r
                    [alt]="product.description" class="product-image-thumbnail"\r
                    onerror="this.style.display='none'" />\r
            </td>\r
            <td>{{product.type}}</td>\r
            <td>{{product.client_price | currency:'BOB'}}</td>\r
            <td>{{product.animation_price | currency:'BOB'}}</td>\r
            <td>{{product.waiter_price | currency:'BOB'}}</td>\r
            <td>{{product.waiter_commission | currency:'BOB'}}</td>\r
            <td>\r
                <p-tag [value]="product.is_active ? 'ACTIVE' : 'INACTIVE'"\r
                    [severity]="product.is_active ? 'success' : 'danger'"></p-tag>\r
            </td>\r
\r
        </tr>\r
    </ng-template>\r
</p-table>\r
\r
>\r
<p-dialog [(visible)]="productDialog" [style]="{ width: '450px' }"\r
    header="Product Details" [modal]="true">\r
    <ng-template pTemplate="content">\r
        <div class="flex flex-col gap-6">\r
            <div>\r
                <label for="description"\r
                    class="block font-bold mb-3">Name</label>\r
                <input type="text" pInputText id="description"\r
                    [(ngModel)]="product.description" required autofocus\r
                    fluid />\r
                <small class="p-error"\r
                    *ngIf="submitted && !product.description">Name is\r
                    required.</small>\r
            </div>\r
\r
            <div>\r
                <label for="type" class="block font-bold mb-3">Type</label>\r
                <p-select id="type" [options]="productTypes"\r
                    [(ngModel)]="product.type" optionLabel="name"\r
                    optionValue="value" placeholder="Select a Type"\r
                    fluid></p-select>\r
            </div>\r
            <div>\r
                <label for="status" class="block font-bold mb-3">Status</label>\r
                <p-select id="status" [options]="statusOptions"\r
                    [(ngModel)]="product.is_active" optionLabel="name"\r
                    optionValue="value" placeholder="Select a Status"\r
                    fluid></p-select>\r
            </div>\r
\r
            <div>\r
                <label for="client_price" class="block font-bold mb-3">Client\r
                    Price</label>\r
                <p-inputnumber id="client_price"\r
                    [(ngModel)]="product.client_price" mode="currency"\r
                    currency="USD" locale="en-US" fluid></p-inputnumber>\r
            </div>\r
            <div>\r
                <label for="animation_price"\r
                    class="block font-bold mb-3">Animation Price</label>\r
                <p-inputnumber id="animation_price"\r
                    [(ngModel)]="product.animation_price" mode="currency"\r
                    currency="USD" locale="en-US" fluid></p-inputnumber>\r
            </div>\r
\r
            <div>\r
                <label for="waiter_price" class="block font-bold mb-3">Waiter\r
                    Price</label>\r
                <p-inputnumber id="waiter_price"\r
                    [(ngModel)]="product.waiter_price" mode="currency"\r
                    currency="USD" locale="en-US" fluid></p-inputnumber>\r
            </div>\r
            <div>\r
                <label for="waiter_commission"\r
                    class="block font-bold mb-3">Waiter Commission</label>\r
                <p-inputnumber id="waiter_commission"\r
                    [(ngModel)]="product.waiter_commission" mode="currency"\r
                    currency="USD" locale="en-US" fluid></p-inputnumber>\r
            </div>\r
\r
            <div class="field" *ngIf="product.id">\r
                <label>Current Image</label>\r
                <img [src]="createImageUrl(product.id)"\r
                    [alt]="product.description" class="product-image-preview"\r
                    onerror="this.style.display='none'" />\r
            </div>\r
\r
            <div class="field">\r
                <label for="image">{{product.id ? 'Change' : 'Upload'}}\r
                    Image</label>\r
                <p-fileupload mode="basic" name="image" url="./"\r
                    (onSelect)="onUpload($event)" accept="image/*"\r
                    [maxFileSize]="5000000"></p-fileupload>\r
            </div>\r
\r
            <div class="field" *ngIf="newImagePreviewUrl">\r
                <label>New Image Preview</label>\r
                <img [src]="newImagePreviewUrl" [alt]="product.description"\r
                    class="product-image-preview" />\r
            </div>\r
        </div>\r
    </ng-template>\r
\r
    <ng-template pTemplate="footer">\r
        <p-button label="Cancel" icon="pi pi-times" severity="secondary"\r
            (click)="hideDialog()"></p-button>\r
        <p-button label="Save" icon="pi pi-check"\r
            (click)="saveProduct()"></p-button>\r
    </ng-template>\r
</p-dialog>\r
`, styles: ["/* src/app/products/component/products.scss */\n.product-image-thumbnail {\n  width: 100px;\n  height: 100px;\n  object-fit: cover;\n  border-radius: 4px;\n  box-shadow:\n    0 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0 4px 5px 0 rgba(0, 0, 0, 0.14),\n    0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n.product-image-preview {\n  width: 150px;\n  height: 150px;\n  object-fit: cover;\n  border-radius: 4px;\n  margin-top: 0.5rem;\n  box-shadow:\n    0 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0 4px 5px 0 rgba(0, 0, 0, 0.14),\n    0 1px 10px 0 rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=products.css.map */\n"] }]
  }], () => [{ type: ProductsApiService }, { type: MessageService }, { type: ConfirmationService }, { type: DomSanitizer }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Products, { className: "Products", filePath: "src/app/products/component/products.ts", lineNumber: 39 });
})();

// src/app/users/component/users.ts
var _c04 = () => ({ "min-width": "75rem" });
var _c14 = () => ({ width: "450px" });
function Users_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 11);
    \u0275\u0275listener("onClick", function Users_ng_template_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
  }
}
function Users_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 12);
    \u0275\u0275text(1, "Status ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p-select", 13);
    \u0275\u0275twoWayListener("ngModelChange", function Users_ng_template_5_Template_p_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.active, $event) || (ctx_r2.active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function Users_ng_template_5_Template_p_select_onChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onChangeActive($event.value));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.active);
    \u0275\u0275property("options", ctx_r2.dropdownItems)("optionValue", "code");
  }
}
function Users_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "h5", 15);
    \u0275\u0275text(2, "Manage Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-iconfield");
    \u0275\u0275element(4, "p-inputicon", 16);
    \u0275\u0275elementStart(5, "input", 17, 6);
    \u0275\u0275listener("keydown.enter", function Users_ng_template_9_Template_input_keydown_enter_5_listener() {
      \u0275\u0275restoreView(_r5);
      const search_r6 = \u0275\u0275reference(6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterByName(search_r6.value));
    })("blur", function Users_ng_template_9_Template_input_blur_5_listener() {
      \u0275\u0275restoreView(_r5);
      const search_r6 = \u0275\u0275reference(6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterByName(search_r6.value));
    });
    \u0275\u0275elementEnd()()();
  }
}
function Users_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 18);
    \u0275\u0275text(2, "Id");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 19);
    \u0275\u0275text(4, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 20);
    \u0275\u0275text(6, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th", 20);
    \u0275\u0275text(8, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th", 20);
    \u0275\u0275text(10, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th", 18);
    \u0275\u0275text(12, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "th", 20);
    \u0275\u0275elementEnd();
  }
}
function Users_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275element(12, "p-tag", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td")(14, "p-button", 22);
    \u0275\u0275listener("click", function Users_ng_template_13_Template_p_button_click_14_listener() {
      const user_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editUser(user_r8));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p-button", 23);
    \u0275\u0275listener("click", function Users_ng_template_13_Template_p_button_click_15_listener() {
      const user_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.changeStatus(user_r8));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r8.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r8.username);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r8.first_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r8.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r8.type);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", user_r8.is_active ? "ACTIVE" : "INACTIVE")("severity", user_r8.is_active ? "success" : "danger");
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", user_r8.is_active ? "pi pi-eye-slash" : "pi pi-eye")("severity", user_r8.is_active ? "danger" : "success");
  }
}
function Users_ng_template_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 30);
    \u0275\u0275text(1, "Username is required.");
    \u0275\u0275elementEnd();
  }
}
function Users_ng_template_16_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 30);
    \u0275\u0275text(1, "Password is required.");
    \u0275\u0275elementEnd();
  }
}
function Users_ng_template_16_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 30);
    \u0275\u0275text(1, "First Name is required.");
    \u0275\u0275elementEnd();
  }
}
function Users_ng_template_16_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 30);
    \u0275\u0275text(1, "Last Name is required.");
    \u0275\u0275elementEnd();
  }
}
function Users_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "label", 24);
    \u0275\u0275text(2, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-select", 25);
    \u0275\u0275twoWayListener("ngModelChange", function Users_ng_template_16_Template_p_select_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.user.type, $event) || (ctx_r2.user.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div")(5, "label", 26);
    \u0275\u0275text(6, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p-select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function Users_ng_template_16_Template_p_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.user.is_active, $event) || (ctx_r2.user.is_active = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div")(9, "label", 28);
    \u0275\u0275text(10, "Username");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function Users_ng_template_16_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.user.username, $event) || (ctx_r2.user.username = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, Users_ng_template_16_Conditional_12_Template, 2, 0, "small", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "label", 31);
    \u0275\u0275text(15, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function Users_ng_template_16_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.user.password, $event) || (ctx_r2.user.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, Users_ng_template_16_Conditional_17_Template, 2, 0, "small", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "label", 33);
    \u0275\u0275text(20, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function Users_ng_template_16_Template_input_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.user.first_name, $event) || (ctx_r2.user.first_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, Users_ng_template_16_Conditional_22_Template, 2, 0, "small", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div")(24, "label", 35);
    \u0275\u0275text(25, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "input", 36);
    \u0275\u0275twoWayListener("ngModelChange", function Users_ng_template_16_Template_input_ngModelChange_26_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.user.last_name, $event) || (ctx_r2.user.last_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, Users_ng_template_16_Conditional_27_Template, 2, 0, "small", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("options", ctx_r2.userTypes);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.user.type);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r2.statusOptions);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.user.is_active);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.user.username);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.submitted && !ctx_r2.user.username ? 12 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.user.password);
    \u0275\u0275property("required", !ctx_r2.user.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.submitted && !ctx_r2.user.password && !ctx_r2.user.id ? 17 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.user.first_name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.submitted && !ctx_r2.user.first_name ? 22 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.user.last_name);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.submitted && !ctx_r2.user.last_name ? 27 : -1);
  }
}
function Users_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 37);
    \u0275\u0275listener("click", function Users_ng_template_17_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 38);
    \u0275\u0275listener("click", function Users_ng_template_17_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveUser());
    });
    \u0275\u0275elementEnd();
  }
}
var Users = class _Users {
  usersService;
  messageService;
  confirmationService;
  sanitizer;
  userDialog = false;
  submitted = false;
  user;
  uploadedFile;
  newImagePreviewUrl = null;
  imageCacheBuster = /* @__PURE__ */ new Map();
  lista = [];
  active = true;
  name = "";
  page = 1;
  perPage = 10;
  pagination;
  first = 0;
  total;
  dropdownItems = [
    { name: "Active", code: true },
    { name: "Inactive", code: false }
  ];
  userTypes = [];
  statusOptions = [{ name: "Active", value: true }, { name: "Inactive", value: false }];
  constructor(usersService, messageService, confirmationService, sanitizer) {
    this.usersService = usersService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.sanitizer = sanitizer;
  }
  ngOnInit() {
    this.getUsers();
    this.loadUserTypes();
  }
  loadUserTypes() {
    this.usersService.getUsersType().subscribe((types) => {
      this.userTypes = types;
    });
  }
  createImageUrl(id) {
    return this.sanitizer.bypassSecurityTrustUrl("");
  }
  getUsers() {
    this.usersService.getUsers(this.active, this.name, this.page, this.perPage).subscribe({
      next: (response) => {
        this.lista = response.data;
        this.pagination = response.pagination;
        this.total = this.pagination.total;
      },
      error: (error) => {
        this.messageService.add({ severity: "error", summary: "Error", detail: "Error fetching users" });
      }
    });
  }
  filterByName(name) {
    this.name = name;
    this.page = 1;
    this.first = 0;
    this.getUsers();
  }
  onChangeActive($event) {
    this.active = $event;
    this.getUsers();
  }
  onPageChange($event) {
    this.first = $event.first;
    this.page = Math.floor($event.first / $event.rows) + 1;
    this.getUsers();
  }
  openNew() {
    this.user = {};
    this.user.is_active = true;
    if (this.userTypes.length > 0) {
      this.user.type = this.userTypes[0].value;
    }
    this.submitted = false;
    this.userDialog = true;
  }
  editUser(user) {
    this.user = __spreadValues({}, user);
    this.userDialog = true;
  }
  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
    this.newImagePreviewUrl = null;
  }
  saveUser() {
    this.submitted = true;
    if (this.user.username?.trim() && this.user.first_name?.trim() && this.user.last_name?.trim()) {
      const userAction = this.user.id ? this.usersService.updateUser(this.user.id, this.user) : this.usersService.createUser(this.user);
      userAction.subscribe({
        next: (response) => {
          const successMessage = this.user.id ? "User Updated" : "User Created";
          this.messageService.add({ severity: "success", summary: "Successful", detail: successMessage });
          this.getUsers();
          this.hideDialog();
        },
        error: (err) => {
          const errorMessage = this.user.id ? "Error updating user" : "Error creating user";
          this.messageService.add({ severity: "error", summary: "Error", detail: errorMessage });
        }
      });
    }
  }
  changeStatus(user) {
    this.confirmationService.confirm({
      message: "Are you sure you want to change the status of " + user.username + "?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.usersService.changeStatus(user.id, !user.is_active).subscribe({
          next: () => {
            this.messageService.add({ severity: "success", summary: "Successful", detail: "User Status Changed" });
            this.getUsers();
          },
          error: (err) => {
            this.messageService.add({ severity: "error", summary: "Error", detail: "Error changing status" });
          }
        });
      }
    });
  }
  onUpload(event) {
  }
  uploadImage(userId) {
    return of(null);
  }
  static \u0275fac = function Users_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Users)(\u0275\u0275directiveInject(UsersApiService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(DomSanitizer));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Users, selectors: [["app-users"]], features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService])], decls: 18, vars: 15, consts: [["start", ""], ["end", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["search", ""], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} users", 3, "onPage", "firstChange", "value", "rows", "paginator", "lazy", "tableStyle", "rowHover", "totalRecords", "first", "showCurrentPageReport"], ["header", "User Details", 3, "visibleChange", "visible", "modal"], ["pTemplate", "content"], ["pTemplate", "footer"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 1, "mr-2", 3, "onClick"], ["for", "active", 1, "mr-2"], ["id", "state", "optionLabel", "name", "placeholder", "Select One", 1, "w-full", 3, "ngModelChange", "onChange", "ngModel", "options", "optionValue"], [1, "flex", "items-center", "justify-between"], [1, "m-0"], [1, "pi", "pi-search"], ["pInputText", "", "type", "text", "placeholder", "Buscar...", 3, "keydown.enter", "blur"], [2, "min-width", "3rem"], [2, "min-width", "16rem"], [2, "min-width", "10rem"], [3, "value", "severity"], ["icon", "pi pi-pencil", "severity", "info", 1, "mr-2", 3, "click"], [3, "click", "icon", "severity"], ["for", "type", 1, "block", "font-bold", "mb-3"], ["id", "type", "optionLabel", "name", "optionValue", "value", "placeholder", "Select a Type", "fluid", "", 3, "ngModelChange", "options", "ngModel"], ["for", "status", 1, "block", "font-bold", "mb-3"], ["id", "status", "optionLabel", "name", "optionValue", "value", "placeholder", "Select a Status", "fluid", "", 3, "ngModelChange", "options", "ngModel"], ["for", "username", 1, "block", "font-bold", "mb-3"], ["type", "text", "pInputText", "", "id", "username", "required", "", "autofocus", "", "fluid", "", 3, "ngModelChange", "ngModel"], [1, "p-error"], ["for", "password", 1, "block", "font-bold", "mb-3"], ["type", "password", "pInputText", "", "id", "password", "fluid", "", 3, "ngModelChange", "ngModel", "required"], ["for", "first_name", 1, "block", "font-bold", "mb-3"], ["type", "text", "pInputText", "", "id", "first_name", "required", "", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "last_name", 1, "block", "font-bold", "mb-3"], ["type", "text", "pInputText", "", "id", "last_name", "required", "", "fluid", "", 3, "ngModelChange", "ngModel"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", 3, "click"], ["label", "Save", "icon", "pi pi-check", 3, "click"]], template: function Users_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast")(1, "p-confirmDialog");
      \u0275\u0275elementStart(2, "p-toolbar");
      \u0275\u0275template(3, Users_ng_template_3_Template, 1, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, Users_ng_template_5_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-table", 7, 2);
      \u0275\u0275listener("onPage", function Users_Template_p_table_onPage_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      });
      \u0275\u0275twoWayListener("firstChange", function Users_Template_p_table_firstChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.first, $event) || (ctx.first = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(9, Users_ng_template_9_Template, 7, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(11, Users_ng_template_11_Template, 14, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(13, Users_ng_template_13_Template, 16, 9, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p-dialog", 8);
      \u0275\u0275twoWayListener("visibleChange", function Users_Template_p_dialog_visibleChange_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.userDialog, $event) || (ctx.userDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(16, Users_ng_template_16_Template, 28, 13, "ng-template", 9)(17, Users_ng_template_17_Template, 2, 0, "ng-template", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.lista)("rows", ctx.perPage)("paginator", true)("lazy", true)("tableStyle", \u0275\u0275pureFunction0(13, _c04))("rowHover", true)("totalRecords", ctx.total);
      \u0275\u0275twoWayProperty("first", ctx.first);
      \u0275\u0275property("showCurrentPageReport", true);
      \u0275\u0275advance(8);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(14, _c14));
      \u0275\u0275twoWayProperty("visible", ctx.userDialog);
      \u0275\u0275property("modal", true);
    }
  }, dependencies: [
    CommonModule,
    ToolbarModule,
    Toolbar,
    PrimeTemplate,
    ButtonModule,
    Button,
    TableModule,
    Table,
    IconFieldModule,
    IconField,
    InputIconModule,
    InputIcon,
    SelectModule,
    Select,
    FormsModule,
    DefaultValueAccessor,
    NgControlStatus,
    RequiredValidator,
    NgModel,
    InputTextModule,
    InputText,
    DialogModule,
    Dialog,
    InputNumberModule,
    FileUploadModule,
    ToastModule,
    Toast,
    ConfirmDialogModule,
    ConfirmDialog,
    TagModule,
    Tag
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Users, [{
    type: Component,
    args: [{ selector: "app-users", imports: [
      CommonModule,
      ToolbarModule,
      ButtonModule,
      TableModule,
      IconFieldModule,
      InputIconModule,
      SelectModule,
      FormsModule,
      InputTextModule,
      DialogModule,
      InputNumberModule,
      FileUploadModule,
      ToastModule,
      ConfirmDialogModule,
      TagModule
    ], providers: [MessageService, ConfirmationService], template: `<p-toast></p-toast>\r
<p-confirmDialog></p-confirmDialog>\r
\r
<p-toolbar>\r
    <ng-template #start>\r
        <p-button label="New" icon="pi pi-plus" severity="secondary" class="mr-2" (onClick)="openNew()" />\r
    </ng-template>\r
\r
    <ng-template #end>\r
        <label for="active" class="mr-2">Status </label>\r
        <p-select id="state" [(ngModel)]="active" [options]="dropdownItems" optionLabel="name" [optionValue]="'code'"\r
            (onChange)="onChangeActive($event.value)" placeholder="Select One" class="w-full"></p-select>\r
    </ng-template>\r
</p-toolbar>\r
\r
<p-table #dt [value]="lista" [rows]="perPage" [paginator]="true" [lazy]="true" [tableStyle]="{ 'min-width': '75rem' }"\r
    [rowHover]="true" (onPage)="onPageChange($event)" [totalRecords]="total" dataKey="id" [(first)]="first"\r
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} users" [showCurrentPageReport]="true">\r
    <ng-template #caption>\r
        <div class="flex items-center justify-between">\r
            <h5 class="m-0">Manage Users</h5>\r
            <p-iconfield>\r
                <p-inputicon class="pi pi-search" />\r
                <input pInputText type="text" #search placeholder="Buscar..." (keydown.enter)="filterByName(search.value)" (blur)="filterByName(search.value)" />\r
            </p-iconfield>\r
        </div>\r
    </ng-template>\r
    <ng-template #header>\r
        <tr>\r
            <th style="min-width: 3rem">Id</th>\r
            <th style="min-width:16rem">Username</th>\r
            <th style="min-width:10rem">First Name</th>\r
            <th style="min-width:10rem">Last Name</th>\r
            <th style="min-width:10rem">Type</th>\r
            <th style="min-width: 3rem">Active</th>\r
            <th style="min-width: 10rem"></th>\r
        </tr>\r
    </ng-template>\r
    <ng-template #body let-user>\r
        <tr>\r
            <td>{{user.id}}</td>\r
            <td>{{user.username}}</td>\r
            <td>{{user.first_name}}</td>\r
            <td>{{user.last_name}}</td>\r
            <td>{{user.type}}</td>\r
            <td>\r
                <p-tag [value]="user.is_active ? 'ACTIVE' : 'INACTIVE'" \r
                       [severity]="user.is_active ? 'success' : 'danger'"></p-tag>\r
            </td>\r
            <td>\r
                <p-button icon="pi pi-pencil" severity="info" class="mr-2" (click)="editUser(user)"></p-button>\r
                <p-button [icon]="user.is_active ? 'pi pi-eye-slash' : 'pi pi-eye'" \r
                          [severity]="user.is_active ? 'danger' : 'success'" \r
                          (click)="changeStatus(user)"></p-button>\r
            </td>\r
        </tr>\r
    </ng-template>\r
</p-table>\r
\r
<p-dialog [(visible)]="userDialog" [style]="{ width: '450px' }"\r
    header="User Details" [modal]="true">\r
    <ng-template pTemplate="content">\r
        <div>\r
            <label for="type" class="block font-bold mb-3">Type</label>\r
            <p-select id="type" [options]="userTypes"\r
                [(ngModel)]="user.type" optionLabel="name"\r
                optionValue="value" placeholder="Select a Type"\r
                fluid></p-select>\r
        </div>\r
        <div>\r
            <label for="status" class="block font-bold mb-3">Status</label>\r
            <p-select id="status" [options]="statusOptions"\r
                [(ngModel)]="user.is_active" optionLabel="name"\r
                optionValue="value" placeholder="Select a Status"\r
                fluid></p-select>\r
        </div>\r
        <div>\r
            <label for="username"\r
                class="block font-bold mb-3">Username</label>\r
            <input type="text" pInputText id="username"\r
                [(ngModel)]="user.username" required autofocus\r
                fluid />\r
            @if (submitted && !user.username) {\r
            <small class="p-error">Username is\r
                required.</small>\r
            }\r
        </div>\r
\r
        <div>\r
            <label for="password"\r
                class="block font-bold mb-3">Password</label>\r
            <input type="password" pInputText id="password"\r
                [(ngModel)]="user.password" [required]="!user.id"\r
                fluid />\r
            @if (submitted && !user.password && !user.id) {\r
            <small class="p-error">Password is\r
                required.</small>\r
            }\r
        </div>\r
\r
        <div>\r
            <label for="first_name" class="block font-bold mb-3">First\r
                Name</label>\r
            <input type="text" pInputText id="first_name"\r
                [(ngModel)]="user.first_name" required\r
                fluid />\r
            @if (submitted && !user.first_name) {\r
            <small class="p-error">First Name is\r
                required.</small>\r
            }\r
        </div>\r
        <div>\r
            <label for="last_name" class="block font-bold mb-3">Last\r
                Name</label>\r
            <input type="text" pInputText id="last_name"\r
                [(ngModel)]="user.last_name" required\r
                fluid />\r
            @if (submitted && !user.last_name) {\r
            <small class="p-error">Last Name is\r
                required.</small>\r
            }\r
        </div>\r
\r
    </ng-template>\r
\r
    <ng-template pTemplate="footer">\r
        <p-button label="Cancel" icon="pi pi-times" severity="secondary"\r
            (click)="hideDialog()"></p-button>\r
        <p-button label="Save" icon="pi pi-check"\r
            (click)="saveUser()"></p-button>\r
    </ng-template>\r
</p-dialog>` }]
  }], () => [{ type: UsersApiService }, { type: MessageService }, { type: ConfirmationService }, { type: DomSanitizer }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Users, { className: "Users", filePath: "src/app/users/component/users.ts", lineNumber: 37 });
})();

// src/app/change-password/component/change-password.ts
function ChangePassword_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 8);
    \u0275\u0275text(1, "Current password is required.");
    \u0275\u0275elementEnd();
  }
}
function ChangePassword_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 8);
    \u0275\u0275text(1, "New password is required.");
    \u0275\u0275elementEnd();
  }
}
function ChangePassword_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 8);
    \u0275\u0275text(1, "Confirmation is required.");
    \u0275\u0275elementEnd();
  }
}
function ChangePassword_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 8);
    \u0275\u0275text(1, "Passwords do not match.");
    \u0275\u0275elementEnd();
  }
}
var ChangePassword = class _ChangePassword {
  usersService;
  messageService;
  router;
  current_password;
  new_password;
  new_password_confirmation;
  submitted = false;
  constructor(usersService, messageService, router) {
    this.usersService = usersService;
    this.messageService = messageService;
    this.router = router;
  }
  ngOnInit() {
  }
  changePassword() {
    this.submitted = true;
    if (this.current_password && this.new_password && this.new_password_confirmation) {
      if (this.new_password !== this.new_password_confirmation) {
        this.messageService.add({ severity: "error", summary: "Error", detail: "New password and confirmation do not match." });
        return;
      }
      this.usersService.changePassword(this.current_password, this.new_password).subscribe({
        next: () => {
          this.messageService.add({ severity: "success", summary: "Successful", detail: "Password changed successfully." });
        },
        error: (err) => {
          this.messageService.add({ severity: "error", summary: "Error", detail: "Failed to change password." });
        }
      });
    } else {
      this.messageService.add({ severity: "error", summary: "Error", detail: "Please fill all fields." });
    }
    this.current_password = "";
    this.new_password = "";
    this.new_password_confirmation = "";
  }
  static \u0275fac = function ChangePassword_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ChangePassword)(\u0275\u0275directiveInject(UsersApiService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChangePassword, selectors: [["app-change-password"]], features: [\u0275\u0275ProvidersFeature([MessageService])], decls: 25, vars: 7, consts: [[1, "flex", "flex-col", "md:flex-row", "gap-8", "justify-content-center", "align-items-center", "min-h-screen"], [1, "md:w-1/2", "mx-auto"], [1, "card", "flex", "flex-col", "gap-4"], [1, "font-semibold", "text-xl", "text-center"], [3, "ngSubmit"], [1, "flex", "flex-col", "gap-2"], ["for", "current_password"], ["pInputText", "", "id", "current_password", "type", "password", "name", "current_password", "required", "", 1, "w-full", 3, "ngModelChange", "ngModel"], [1, "p-error"], [1, "flex", "flex-col", "gap-2", "mt-3"], ["for", "new_password"], ["pInputText", "", "id", "new_password", "type", "password", "name", "new_password", "required", "", 1, "w-full", 3, "ngModelChange", "ngModel"], ["for", "new_password_confirmation"], ["pInputText", "", "id", "new_password_confirmation", "type", "password", "name", "new_password_confirmation", "required", "", 1, "w-full", 3, "ngModelChange", "ngModel"], ["pButton", "", "pRipple", "", "label", "Change Password", "icon", "pi pi-check", 1, "mt-3"]], template: function ChangePassword_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "p-toast");
      \u0275\u0275elementStart(1, "p-fluid")(2, "div", 0)(3, "div", 1)(4, "div", 2)(5, "div", 3);
      \u0275\u0275text(6, "Change Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "form", 4);
      \u0275\u0275listener("ngSubmit", function ChangePassword_Template_form_ngSubmit_7_listener() {
        return ctx.changePassword();
      });
      \u0275\u0275elementStart(8, "div", 5)(9, "label", 6);
      \u0275\u0275text(10, "Current Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "input", 7);
      \u0275\u0275twoWayListener("ngModelChange", function ChangePassword_Template_input_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.current_password, $event) || (ctx.current_password = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(12, ChangePassword_Conditional_12_Template, 2, 0, "small", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 9)(14, "label", 10);
      \u0275\u0275text(15, "New Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function ChangePassword_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.new_password, $event) || (ctx.new_password = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(17, ChangePassword_Conditional_17_Template, 2, 0, "small", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 9)(19, "label", 12);
      \u0275\u0275text(20, "Confirm New Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "input", 13);
      \u0275\u0275twoWayListener("ngModelChange", function ChangePassword_Template_input_ngModelChange_21_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.new_password_confirmation, $event) || (ctx.new_password_confirmation = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(22, ChangePassword_Conditional_22_Template, 2, 0, "small", 8);
      \u0275\u0275conditionalCreate(23, ChangePassword_Conditional_23_Template, 2, 0, "small", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "button", 14);
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275twoWayProperty("ngModel", ctx.current_password);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.submitted && !ctx.current_password ? 12 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.new_password);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.submitted && !ctx.new_password ? 17 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.new_password_confirmation);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.submitted && !ctx.new_password_confirmation ? 22 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.submitted && ctx.new_password && ctx.new_password_confirmation && ctx.new_password !== ctx.new_password_confirmation ? 23 : -1);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    NgModel,
    NgForm,
    InputTextModule,
    InputText,
    ButtonModule,
    ButtonDirective,
    ToastModule,
    Toast,
    FluidModule,
    Fluid
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChangePassword, [{
    type: Component,
    args: [{ selector: "app-change-password", standalone: true, imports: [
      CommonModule,
      FormsModule,
      InputTextModule,
      ButtonModule,
      ToastModule,
      FluidModule
    ], providers: [MessageService], template: '<p-toast></p-toast>\r\n\r\n<p-fluid>\r\n    <div class="flex flex-col md:flex-row gap-8 justify-content-center align-items-center min-h-screen">\r\n        <div class="md:w-1/2 mx-auto">\r\n            <div class="card flex flex-col gap-4">\r\n                <div class="font-semibold text-xl text-center">Change Password</div>\r\n\r\n                <form (ngSubmit)="changePassword()">\r\n                    <div class="flex flex-col gap-2">\r\n                        <label for="current_password">Current Password</label>\r\n                        <input pInputText id="current_password" type="password" class="w-full" [(ngModel)]="current_password" name="current_password" required />\r\n                        @if (submitted && !current_password) {\r\n                        <small class="p-error">Current password is required.</small>\r\n                        }\r\n                    </div>\r\n\r\n                    <div class="flex flex-col gap-2 mt-3">\r\n                        <label for="new_password">New Password</label>\r\n                        <input pInputText id="new_password" type="password" class="w-full" [(ngModel)]="new_password" name="new_password" required />\r\n                        @if (submitted && !new_password) {\r\n                        <small class="p-error">New password is required.</small>\r\n                        }\r\n                    </div>\r\n\r\n                    <div class="flex flex-col gap-2 mt-3">\r\n                        <label for="new_password_confirmation">Confirm New Password</label>\r\n                        <input pInputText id="new_password_confirmation" type="password" class="w-full" [(ngModel)]="new_password_confirmation" name="new_password_confirmation" required />\r\n                        @if (submitted && !new_password_confirmation) {\r\n                        <small class="p-error">Confirmation is required.</small>\r\n                        }\r\n                        @if (submitted && new_password && new_password_confirmation && new_password !== new_password_confirmation) {\r\n                        <small class="p-error">Passwords do not match.</small>\r\n                        }\r\n                    </div>\r\n\r\n                    <button pButton pRipple label="Change Password" icon="pi pi-check" class="mt-3"></button>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</p-fluid>' }]
  }], () => [{ type: UsersApiService }, { type: MessageService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChangePassword, { className: "ChangePassword", filePath: "src/app/change-password/component/change-password.ts", lineNumber: 27 });
})();

// src/app/orders/services/order-waiter-api.ts
var OrderWaiterApi = class _OrderWaiterApi {
  http = inject(HttpClient);
  url = "/api/order-waiters";
  getOrderWaiters(orderdetailid) {
    return this.http.get(this.url + "/" + orderdetailid);
  }
  createWaiterDetail(detail) {
    return this.http.post(this.url, detail);
  }
  updateWaiterDetail(id, detail) {
    return this.http.put(`${this.url}/${id}`, detail);
  }
  deleteWaiterDetail(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  static \u0275fac = function OrderWaiterApi_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderWaiterApi)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderWaiterApi, factory: _OrderWaiterApi.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderWaiterApi, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/orders/component/waiters/waiters.ts
var _c05 = () => ({ "min-width": "35rem" });
function Waiters_Conditional_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const selectedOption_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(selectedOption_r3.username);
  }
}
function Waiters_Conditional_1_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const waiter_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", waiter_r4.username, " ", waiter_r4.first_name, " ", waiter_r4.last_name);
  }
}
function Waiters_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div")(2, "label", 8);
    \u0275\u0275text(3, "Waiter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-select", 9);
    \u0275\u0275twoWayListener("ngModelChange", function Waiters_Conditional_1_Template_p_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.waiter, $event) || (ctx_r1.waiter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(5, Waiters_Conditional_1_ng_template_5_Template, 3, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(7, Waiters_Conditional_1_ng_template_7_Template, 3, 3, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p-button", 10);
    \u0275\u0275listener("click", function Waiters_Conditional_1_Template_p_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addWaiter());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r1.waiters);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.waiter);
    \u0275\u0275property("filter", true)("showClear", true);
  }
}
function Waiters_ng_template_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 12);
  }
}
function Waiters_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275conditionalCreate(1, Waiters_ng_template_4_Conditional_1_Template, 1, 0, "th", 12);
    \u0275\u0275elementStart(2, "th", 13);
    \u0275\u0275text(3, "Waiter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 13);
    \u0275\u0275text(5, "Comision");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.view ? 1 : -1);
  }
}
function Waiters_ng_template_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "p-button", 14);
    \u0275\u0275listener("click", function Waiters_ng_template_6_Conditional_1_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const orderwaiter_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteWaiter(orderwaiter_r6));
    });
    \u0275\u0275elementEnd()();
  }
}
function Waiters_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275conditionalCreate(1, Waiters_ng_template_6_Conditional_1_Template, 2, 0, "td");
    \u0275\u0275elementStart(2, "td");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const orderwaiter_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.view && (ctx_r1.getCurrentUser().type == "IN_CHARGE" || ctx_r1.getCurrentUser().type == "ADMINISTRATOR") ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", orderwaiter_r6.waiter.first_name, " ", orderwaiter_r6.waiter.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(orderwaiter_r6.comision);
  }
}
var Waiters = class _Waiters extends Common {
  userservice;
  messageservice;
  orderswaitersservice;
  confirmationService;
  addWaiter() {
    this.orderWaiter = {};
    this.orderWaiter.order_det_id = this.orderdet.id;
    this.orderWaiter.waiter_id = this.waiter.id;
    this.insertOrderWaiter(this.orderWaiter);
  }
  insertOrderWaiter(orderWaiter) {
    this.orderswaitersservice.createWaiterDetail(orderWaiter).subscribe({
      next: (response) => {
        this.getOrderWaiters(this.orderdet.id);
      },
      error: (error) => {
        this.messageservice.add({ severity: "error", summary: "Error", detail: "Error creating order waiter" });
      }
    });
  }
  orderdet;
  view;
  waiters = [];
  orderswaiters = [];
  waiter = {};
  orderWaiter;
  constructor(userservice, messageservice, orderswaitersservice, confirmationService) {
    super();
    this.userservice = userservice;
    this.messageservice = messageservice;
    this.orderswaitersservice = orderswaitersservice;
    this.confirmationService = confirmationService;
  }
  ngOnInit() {
    this.getWaiters();
    console.log(this.orderdet);
    this.orderswaiters = this.orderdet.order_waiters;
  }
  getWaiters() {
    this.userservice.getWaiters("").subscribe({
      next: (response) => {
        this.waiters = response;
        console.log("waiters", this.waiters);
      },
      error: (error) => {
        this.messageservice.add({ severity: "error", summary: "Error", detail: "Error fetching waiters" });
      }
    });
  }
  getOrderWaiters(orderdetailid) {
    this.orderswaitersservice.getOrderWaiters(orderdetailid).subscribe({
      next: (response) => {
        this.orderswaiters = response;
      },
      error: (error) => {
        this.messageservice.add({ severity: "error", summary: "Error", detail: "Error fetching order waiters" });
      }
    });
  }
  deleteWaiterapi(id) {
    this.orderswaitersservice.deleteWaiterDetail(id).subscribe({
      next: (response) => {
        this.getOrderWaiters(this.orderdet.id);
      },
      error: (error) => {
        this.messageservice.add({ severity: "error", summary: "Error", detail: "Error deleting order waiter" });
      }
    });
  }
  deleteWaiter(ordetwaiter) {
    this.confirmationService.confirm({
      message: "Are you sure you want delete order Waiter ?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.deleteWaiterapi(ordetwaiter.id);
      }
    });
  }
  static \u0275fac = function Waiters_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Waiters)(\u0275\u0275directiveInject(UsersApiService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(OrderWaiterApi), \u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Waiters, selectors: [["app-waiters"]], inputs: { orderdet: "orderdet", view: "view" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 7, consts: [["dt", ""], ["header", ""], ["body", ""], ["selectedItem", ""], ["item", ""], [1, "h-full", "flex", "flex-col"], [1, "flex", "flex-col", "gap-6"], ["scrollHeight", "flex", 3, "value", "paginator", "lazy", "tableStyle", "scrollable"], ["for", "type", 1, "block", "font-bold", "mb-3"], ["optionLabel", "first_name", "filterBy", "username", "placeholder", "Select a Waiter", "fluid", "", 1, "w-full", "md:w-56", 3, "ngModelChange", "options", "ngModel", "filter", "showClear"], ["label", "Add", "icon", "pi pi-plus", "severity", "secondary", 3, "click"], [1, "flex", "items-center", "gap-2"], [2, "min-width", "3rem"], [2, "min-width", "2rem"], ["icon", "pi pi-times", "severity", "danger", 3, "click"]], template: function Waiters_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 5);
      \u0275\u0275conditionalCreate(1, Waiters_Conditional_1_Template, 10, 4, "div", 6);
      \u0275\u0275elementStart(2, "p-table", 7, 0);
      \u0275\u0275template(4, Waiters_ng_template_4_Template, 6, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, Waiters_ng_template_6_Template, 6, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.view ? 1 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.orderswaiters)("paginator", false)("lazy", true)("tableStyle", \u0275\u0275pureFunction0(6, _c05))("scrollable", true);
    }
  }, dependencies: [SelectModule, Select, FormsModule, NgControlStatus, NgModel, TableModule, Table, Button], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Waiters, [{
    type: Component,
    args: [{ selector: "app-waiters", imports: [SelectModule, FormsModule, TableModule, Button], template: `<div class="h-full flex flex-col">\r
    @if(!this.view){\r
    <div class="flex flex-col gap-6">\r
        <div>\r
            <label for="type" class="block font-bold mb-3">Waiter</label>\r
            <p-select [options]="waiters"\r
                [(ngModel)]="waiter"\r
                optionLabel="first_name" [filter]="true"\r
                filterBy="username"\r
                [showClear]="true" placeholder="Select a Waiter" fluid\r
                class="w-full md:w-56">\r
                <ng-template #selectedItem let-selectedOption>\r
                    <div class="flex items-center gap-2">\r
                        <div>{{ selectedOption.username }}</div>\r
                    </div>\r
                </ng-template>\r
                <ng-template let-waiter #item>\r
                    <div class="flex items-center gap-2">\r
                        <div>{{ waiter.username }} {{ waiter.first_name }} {{\r
                            waiter.last_name }}</div>\r
                    </div>\r
                </ng-template>\r
            </p-select>\r
        </div>\r
        <p-button label="Add" icon="pi pi-plus" severity="secondary"\r
            (click)="addWaiter()"></p-button>\r
    </div>\r
    }\r
    <p-table #dt [value]="this.orderswaiters" [paginator]="false" [lazy]="true"\r
        [tableStyle]="{ 'min-width': '35rem' }" [scrollable]="true"\r
        scrollHeight="flex">\r
\r
        <ng-template #header>\r
            <tr>\r
                @if (!view){\r
                <th style="min-width: 3rem"> </th>\r
                }\r
                <th style="min-width: 2rem">Waiter</th>\r
                <th style="min-width: 2rem">Comision</th>\r
            </tr>\r
        </ng-template>\r
        <ng-template #body let-orderwaiter>\r
            <tr>\r
                @if (!view && (this.getCurrentUser().type == 'IN_CHARGE' ||\r
                this.getCurrentUser().type == 'ADMINISTRATOR')){\r
                <td>\r
                    <p-button icon="pi pi-times" severity="danger"\r
                        (click)="deleteWaiter(orderwaiter)"></p-button>\r
                </td>\r
                }\r
                <td>{{orderwaiter.waiter.first_name}}\r
                    {{orderwaiter.waiter.last_name}}</td>\r
                <td>{{orderwaiter.comision}}</td>\r
            </tr>\r
        </ng-template>\r
    </p-table>\r
</div>` }]
  }], () => [{ type: UsersApiService }, { type: MessageService }, { type: OrderWaiterApi }, { type: ConfirmationService }], { orderdet: [{
    type: Input
  }], view: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Waiters, { className: "Waiters", filePath: "src/app/orders/component/waiters/waiters.ts", lineNumber: 19 });
})();

// src/app/orders/services/order-details-api.ts
var OrderDetailsApi = class _OrderDetailsApi {
  http = inject(HttpClient);
  url = `/api/order-details`;
  getProductTypes() {
    return this.http.get(`${this.url}/types`);
  }
  getOrderDetails(orderId) {
    return this.http.get(this.url + "/" + orderId);
  }
  createDetail(detail) {
    return this.http.post(this.url, detail);
  }
  updateDetail(id, detail) {
    return this.http.put(`${this.url}/${id}`, detail);
  }
  deleteDetail(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
  static \u0275fac = function OrderDetailsApi_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrderDetailsApi)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrderDetailsApi, factory: _OrderDetailsApi.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrderDetailsApi, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/orders/component/details/details.ts
var _c06 = () => ({ "min-width": "35rem" });
var _c15 = () => ({ width: "60vw", height: "80vh" });
var _c2 = () => ({ "768px": "100vw" });
var _c3 = () => ({ "flex-grow": "1" });
function Details_ng_template_2_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 15);
    \u0275\u0275listener("onClick", function Details_ng_template_2_Conditional_0_Conditional_3_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
  }
}
function Details_ng_template_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h5", 13);
    \u0275\u0275text(2, "Productos");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, Details_ng_template_2_Conditional_0_Conditional_3_Template, 1, 0, "p-button", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.order.status === "OPEN" && ctx_r2.getCurrentUser().id === ctx_r2.order.waiter.id ? 3 : -1);
  }
}
function Details_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Details_ng_template_2_Conditional_0_Template, 4, 1, "div", 12);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r2.view ? 0 : -1);
  }
}
function Details_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275element(1, "th", 16);
    \u0275\u0275elementStart(2, "th", 17);
    \u0275\u0275text(3, "Producto");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "th", 17);
    \u0275\u0275text(5, "Cantidad");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 17);
    \u0275\u0275text(7, "Precio");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 16);
    \u0275\u0275text(9, "Tipo");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 16);
    \u0275\u0275text(11, "Observaci\xF3n");
    \u0275\u0275elementEnd()();
  }
}
function Details_ng_template_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 21);
    \u0275\u0275listener("click", function Details_ng_template_6_Conditional_2_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const orderdetail_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editDetail(orderdetail_r5));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 22);
    \u0275\u0275listener("click", function Details_ng_template_6_Conditional_2_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const orderdetail_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteDetail(orderdetail_r5));
    });
    \u0275\u0275elementEnd();
  }
}
function Details_ng_template_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 23);
    \u0275\u0275listener("click", function Details_ng_template_6_Conditional_3_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const orderdetail_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editWaiters(orderdetail_r5));
    });
    \u0275\u0275elementEnd();
  }
}
function Details_ng_template_6_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 24);
    \u0275\u0275listener("click", function Details_ng_template_6_Conditional_4_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const orderdetail_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewWaiters(orderdetail_r5));
    });
    \u0275\u0275elementEnd();
  }
}
function Details_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275conditionalCreate(2, Details_ng_template_6_Conditional_2_Template, 2, 0);
    \u0275\u0275conditionalCreate(3, Details_ng_template_6_Conditional_3_Template, 1, 0, "p-button", 18);
    \u0275\u0275conditionalCreate(4, Details_ng_template_6_Conditional_4_Template, 1, 0, "p-button", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "div", 20);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "td");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const orderdetail_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.order.status === "OPEN" && (ctx_r2.getCurrentUser().type === "IN_CHARGE" || ctx_r2.getCurrentUser().type === "ADMINISTRATOR") && !ctx_r2.view ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.view && orderdetail_r5.type === "WAITER" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.view && orderdetail_r5.type === "WAITER" ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", orderdetail_r5.product.description, " ", orderdetail_r5.type === "CLIENT" ? orderdetail_r5.product.client_price : orderdetail_r5.type === "WAITER" ? orderdetail_r5.product.waiter_price : orderdetail_r5.product.animation_price, " Bs. ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(orderdetail_r5.quantity);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", orderdetail_r5.price, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(orderdetail_r5.type);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(orderdetail_r5.observation);
  }
}
function Details_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275element(1, "td")(2, "td");
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4, " Total ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td")(6, "div", 20);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r2.totalpay(), " ");
  }
}
function Details_ng_template_11_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const selectedOption_r9 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(selectedOption_r9.description);
  }
}
function Details_ng_template_11_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const product_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r10.description);
  }
}
function Details_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div")(2, "label", 26);
    \u0275\u0275text(3, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p-select", 27);
    \u0275\u0275twoWayListener("ngModelChange", function Details_ng_template_11_Template_p_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.currentDetail.type, $event) || (ctx_r2.currentDetail.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div")(6, "label", 26);
    \u0275\u0275text(7, "Product");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p-select", 28);
    \u0275\u0275twoWayListener("ngModelChange", function Details_ng_template_11_Template_p_select_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.product, $event) || (ctx_r2.product = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275template(9, Details_ng_template_11_ng_template_9_Template, 3, 1, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(11, Details_ng_template_11_ng_template_11_Template, 3, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div")(14, "label", 29);
    \u0275\u0275text(15, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p-inputnumber", 30);
    \u0275\u0275twoWayListener("ngModelChange", function Details_ng_template_11_Template_p_inputnumber_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.currentDetail.quantity, $event) || (ctx_r2.currentDetail.quantity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "label", 31);
    \u0275\u0275text(19, "Observation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function Details_ng_template_11_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.currentDetail.observation, $event) || (ctx_r2.currentDetail.observation = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r2.types);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.currentDetail.type);
    \u0275\u0275advance(4);
    \u0275\u0275property("options", ctx_r2.products.data);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.product);
    \u0275\u0275property("filter", true)("showClear", true);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.currentDetail.quantity);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.currentDetail.observation);
  }
}
function Details_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 34);
    \u0275\u0275listener("click", function Details_ng_template_12_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideDialog());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 35);
    \u0275\u0275listener("click", function Details_ng_template_12_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.saveDetail());
    });
    \u0275\u0275elementEnd();
  }
}
function Details_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-waiters", 36);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("orderdet", ctx_r2.currentDetail)("view", ctx_r2.view);
  }
}
function Details_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 37);
    \u0275\u0275listener("click", function Details_ng_template_15_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideDialogw());
    });
    \u0275\u0275elementEnd();
  }
}
var Details = class _Details extends Common {
  detailservice;
  messageService;
  productService;
  confirmationService;
  viewWaiters(orderdetail) {
    this.currentDetail = orderdetail;
    this.orderWaiDialog = true;
  }
  editWaiters(orderdetail) {
    this.currentDetail = orderdetail;
    this.orderWaiDialog = true;
  }
  orderWaiDialog = false;
  editDetail(orderdetail) {
    this.currentDetail = {};
    this.orderDetDialog = true;
    this.product = orderdetail.product;
    this.currentDetail.order_id = orderdetail.order_id;
    this.currentDetail.product_id = orderdetail.product_id;
    this.currentDetail.quantity = orderdetail.quantity;
    this.currentDetail.type = orderdetail.type;
    this.currentDetail.observation = orderdetail.observation;
    this.currentid = orderdetail.id;
    this.typeoption = "edit";
  }
  orderDetDialog = false;
  currentDetail;
  types = [];
  products;
  product;
  typeoption = "";
  currentid;
  openNew() {
    this.currentDetail = {};
    this.orderDetDialog = true;
    this.typeoption = "new";
  }
  details = [];
  order;
  view;
  constructor(detailservice, messageService, productService, confirmationService) {
    super();
    this.detailservice = detailservice;
    this.messageService = messageService;
    this.productService = productService;
    this.confirmationService = confirmationService;
  }
  saveDetail() {
    this.currentDetail.product_id = this.product.id;
    this.currentDetail.order_id = this.order.id;
    if (this.typeoption === "new") {
      this.detailservice.createDetail(this.currentDetail).subscribe({
        next: (response) => {
          this.getOrderDetails();
          this.hideDialog();
        },
        error: (error) => {
          this.messageService.add({ severity: "error", summary: "Error", detail: "Error creating order detail" });
        }
      });
    } else {
      this.detailservice.updateDetail(this.currentid, this.currentDetail).subscribe({
        next: (response) => {
          this.getOrderDetails();
          this.hideDialog();
        },
        error: (error) => {
          this.messageService.add({ severity: "error", summary: "Error", detail: "Error updating order detail" });
        }
      });
    }
  }
  hideDialog() {
    this.orderDetDialog = false;
  }
  hideDialogw() {
    this.orderWaiDialog = false;
  }
  ngOnInit() {
    this.getDetailType();
    this.getProducts();
    this.details = this.order.details;
  }
  getOrderDetails() {
    this.detailservice.getOrderDetails(this.order.id).subscribe({
      next: (response) => {
        this.details = response;
        console.log(this.details);
      },
      error: (error) => {
        this.messageService.add({ severity: "error", summary: "Error", detail: "Error fetching order details" });
      }
    });
  }
  totalpay() {
    let total = 0;
    for (const detail of this.details) {
      total += parseFloat(detail.price || "0");
    }
    return total;
  }
  getDetailType() {
    this.detailservice.getProductTypes().subscribe({
      next: (response) => {
        this.types = response;
      },
      error: (error) => {
        this.messageService.add({ severity: "error", summary: "Error", detail: "Error fetching details types" });
      }
    });
  }
  getProducts() {
    this.productService.getProducts(true, "", 1, 99999).subscribe({
      next: (response) => {
        this.products = response;
        console.log(this.products);
      },
      error: (error) => {
        this.messageService.add({ severity: "error", summary: "Error", detail: "Error fetching products" });
      }
    });
  }
  deleteDetail(orderDetail) {
    this.confirmationService.confirm({
      message: "Are you sure you want delete order detail ?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.detailservice.deleteDetail(orderDetail.id).subscribe({
          next: (response) => {
            this.getOrderDetails();
          },
          error: (error) => {
            this.messageService.add({ severity: "error", summary: "Error", detail: "Error deleting order detail" });
          }
        });
      }
    });
  }
  onhideDialogw() {
    this.getOrderDetails();
  }
  onhideDialog() {
    this.getOrderDetails();
  }
  static \u0275fac = function Details_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Details)(\u0275\u0275directiveInject(OrderDetailsApi), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ProductsApiService), \u0275\u0275directiveInject(ConfirmationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Details, selectors: [["app-details"]], inputs: { order: "order", view: "view" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 19, consts: [["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["footer", ""], ["selectedItem", ""], ["item", ""], [3, "value", "paginator", "lazy", "tableStyle"], ["header", "Productos", "closable", "false", "modal", "true", 3, "visibleChange", "onHide", "visible", "breakpoints"], ["pTemplate", "content"], ["pTemplate", "footer"], ["header", "Waiters", "closable", "false", "modal", "true", "styleClass", "flex flex-col", 3, "visibleChange", "onHide", "visible", "breakpoints", "contentStyle"], [1, "flex", "items-center", "justify-between", "gap-2"], [1, "m-0"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 1, "mr-2"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 1, "mr-2", 3, "onClick"], [2, "min-width", "3rem"], [2, "min-width", "2rem"], ["icon", "pi pi-user", "severity", "help", "pTooltip", "Waiters", 1, "mr-2"], ["icon", "pi pi-user", "severity", "success", "pTooltip", "view Waiters", 1, "mr-2"], [1, "text-right"], ["icon", "pi pi-pencil", "severity", "info", "pTooltip", "Edit detail", 1, "mr-2", 3, "click"], ["icon", "pi pi-times", "severity", "danger", "pTooltip", "Delete detail", 1, "mr-2", 3, "click"], ["icon", "pi pi-user", "severity", "help", "pTooltip", "Waiters", 1, "mr-2", 3, "click"], ["icon", "pi pi-user", "severity", "success", "pTooltip", "view Waiters", 1, "mr-2", 3, "click"], [1, "flex", "flex-col", "gap-6"], ["for", "type", 1, "block", "font-bold", "mb-3"], ["id", "type", "optionLabel", "name", "optionValue", "value", "placeholder", "Select a Type", "fluid", "", 3, "ngModelChange", "options", "ngModel"], ["optionLabel", "description", "filterBy", "description", "placeholder", "Select a Product", "fluid", "", 1, "w-full", "md:w-56", 3, "ngModelChange", "options", "ngModel", "filter", "showClear"], ["for", "quantity", 1, "block", "font-bold", "mb-3"], ["id", "client_price", "mode", "decimal", "fluid", "", 3, "ngModelChange", "ngModel"], ["for", "observation", 1, "block", "font-bold", "mb-3"], ["type", "text", "pInputText", "", "id", "observation", "fluid", "", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "gap-2"], ["label", "Cancel", "icon", "pi pi-times", "severity", "secondary", 3, "click"], ["label", "Save", "icon", "pi pi-check", 3, "click"], [3, "orderdet", "view"], ["label", "Close", "icon", "pi pi-times", "severity", "secondary", 3, "click"]], template: function Details_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "p-table", 7, 0);
      \u0275\u0275template(2, Details_ng_template_2_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(4, Details_ng_template_4_Template, 12, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(6, Details_ng_template_6_Template, 16, 9, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(8, Details_ng_template_8_Template, 8, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p-dialog", 8);
      \u0275\u0275twoWayListener("visibleChange", function Details_Template_p_dialog_visibleChange_10_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.orderDetDialog, $event) || (ctx.orderDetDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onHide", function Details_Template_p_dialog_onHide_10_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onhideDialog());
      });
      \u0275\u0275template(11, Details_ng_template_11_Template, 21, 8, "ng-template", 9)(12, Details_ng_template_12_Template, 2, 0, "ng-template", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p-dialog", 11);
      \u0275\u0275twoWayListener("visibleChange", function Details_Template_p_dialog_visibleChange_13_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.orderWaiDialog, $event) || (ctx.orderWaiDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onHide", function Details_Template_p_dialog_onHide_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onhideDialogw());
      });
      \u0275\u0275template(14, Details_ng_template_14_Template, 1, 2, "ng-template", 9)(15, Details_ng_template_15_Template, 1, 0, "ng-template", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("value", ctx.details)("paginator", false)("lazy", true)("tableStyle", \u0275\u0275pureFunction0(13, _c06));
      \u0275\u0275advance(10);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(14, _c15));
      \u0275\u0275twoWayProperty("visible", ctx.orderDetDialog);
      \u0275\u0275property("breakpoints", \u0275\u0275pureFunction0(15, _c2));
      \u0275\u0275advance(3);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(16, _c15));
      \u0275\u0275twoWayProperty("visible", ctx.orderWaiDialog);
      \u0275\u0275property("breakpoints", \u0275\u0275pureFunction0(17, _c2))("contentStyle", \u0275\u0275pureFunction0(18, _c3));
    }
  }, dependencies: [TableModule, Table, PrimeTemplate, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, ButtonModule, Button, DialogModule, Dialog, SelectModule, Select, InputNumberModule, InputNumber, InputTextModule, InputText, Waiters], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Details, [{
    type: Component,
    args: [{ selector: "app-details", imports: [TableModule, FormsModule, ButtonModule, DialogModule, SelectModule, InputNumberModule, InputTextModule, Waiters], template: `<p-table #dt [value]="details" [paginator]="false" [lazy]="true"\r
    [tableStyle]="{ 'min-width': '35rem' }">\r
    <ng-template #caption>\r
        @if(!view){\r
        <div class="flex items-center justify-between gap-2">\r
            <h5 class="m-0">Productos</h5>\r
            @if(order.status === 'OPEN' && (this.getCurrentUser().id ===\r
            order.waiter.id )){\r
            <p-button label="New" icon="pi pi-plus" severity="secondary"\r
                class="mr-2" (onClick)="openNew()" />\r
            }\r
        </div>\r
        }\r
    </ng-template>\r
\r
    <ng-template #header>\r
        <tr>\r
\r
            <th style="min-width: 3rem"> </th>\r
            <th style="min-width: 2rem">Producto</th>\r
            <th style="min-width: 2rem">Cantidad</th>\r
            <th style="min-width: 2rem">Precio</th>\r
            <th style="min-width: 3rem">Tipo</th>\r
            <th style="min-width: 3rem">Observaci\xF3n</th>\r
        </tr>\r
    </ng-template>\r
    <ng-template #body let-orderdetail>\r
        <tr>\r
\r
            <td>\r
                @if(order.status === 'OPEN' && (this.getCurrentUser().type ===\r
                'IN_CHARGE' ||this.getCurrentUser().type === 'ADMINISTRATOR') &&\r
                !view){\r
                <p-button icon="pi pi-pencil" severity="info" class="mr-2"\r
                    (click)="editDetail(orderdetail)"\r
                    pTooltip="Edit detail"></p-button>\r
                <p-button icon="pi pi-times" severity="danger" class="mr-2"\r
                    (click)="deleteDetail(orderdetail)"\r
                    pTooltip="Delete detail"></p-button>\r
                }\r
                @if (!view && orderdetail.type === 'WAITER'){\r
                <p-button icon="pi pi-user" severity="help" class="mr-2"\r
                    (click)="editWaiters(orderdetail)"\r
                    pTooltip="Waiters"></p-button>\r
                }\r
                @if (view && orderdetail.type === 'WAITER'){\r
                <p-button icon="pi pi-user" severity="success" class="mr-2"\r
                    (click)="viewWaiters(orderdetail)"\r
                    pTooltip="view Waiters"></p-button>\r
                }\r
\r
            </td>\r
\r
            <td>{{orderdetail.product.description}}\r
                {{orderdetail.type==='CLIENT'?\r
                orderdetail.product.client_price:orderdetail.type==='WAITER'?orderdetail.product.waiter_price:orderdetail.product.animation_price}}\r
                Bs.\r
            </td>\r
            <td>{{orderdetail.quantity}}</td>\r
            <td>\r
                <div class="text-right">\r
                    {{orderdetail.price}}\r
                </div>\r
            </td>\r
            <td>{{orderdetail.type}}</td>\r
            <td>{{orderdetail.observation}}</td>\r
        </tr>\r
    </ng-template>\r
    <ng-template #footer>\r
        <tr>\r
            <td></td>\r
            <td></td>\r
            <td>\r
                Total\r
            </td>\r
            <td>\r
                <div class="text-right">\r
                    {{this.totalpay()}}\r
                </div>\r
            </td>\r
        </tr>\r
    </ng-template>\r
</p-table>\r
<p-dialog [(visible)]="orderDetDialog" [breakpoints]="{'768px': '100vw'}"\r
    [style]="{width: '60vw', height: '80vh'}" header="Productos"\r
    (onHide)="onhideDialog()"\r
    closable="false" modal="true">\r
    <ng-template pTemplate="content">\r
        <div class="flex flex-col gap-6">\r
            <div>\r
                <label for="type" class="block font-bold mb-3">Type</label>\r
                <p-select id="type" [options]="types"\r
                    [(ngModel)]="currentDetail.type" optionLabel="name"\r
                    optionValue="value" placeholder="Select a Type"\r
                    fluid></p-select>\r
            </div>\r
            <div>\r
                <label for="type" class="block font-bold mb-3">Product</label>\r
                <p-select [options]="products.data"\r
                    [(ngModel)]="product"\r
                    optionLabel="description" [filter]="true"\r
                    filterBy="description"\r
                    [showClear]="true" placeholder="Select a Product" fluid\r
                    class="w-full md:w-56">\r
                    <ng-template #selectedItem let-selectedOption>\r
                        <div class="flex items-center gap-2">\r
                            <div>{{ selectedOption.description }}</div>\r
                        </div>\r
                    </ng-template>\r
                    <ng-template let-product #item>\r
                        <div class="flex items-center gap-2">\r
                            <div>{{ product.description }}</div>\r
                        </div>\r
                    </ng-template>\r
                </p-select>\r
            </div>\r
            <div>\r
                <label for="quantity"\r
                    class="block font-bold mb-3">Quantity</label>\r
                <p-inputnumber id="client_price"\r
                    [(ngModel)]="currentDetail.quantity" mode="decimal"\r
                    fluid></p-inputnumber>\r
            </div>\r
            <div>\r
                <label for="observation"\r
                    class="block font-bold mb-3">Observation</label>\r
                <input type="text" pInputText\r
                    [(ngModel)]="currentDetail.observation" id="observation"\r
                    fluid />\r
\r
            </div>\r
        </div>\r
    </ng-template>\r
\r
    <ng-template pTemplate="footer">\r
        <p-button label="Cancel" icon="pi pi-times" severity="secondary"\r
            (click)="hideDialog()"></p-button>\r
        <p-button label="Save" icon="pi pi-check"\r
            (click)="saveDetail()"></p-button>\r
    </ng-template>\r
\r
</p-dialog>\r
<p-dialog [(visible)]="orderWaiDialog" [breakpoints]="{'768px': '100vw'}"\r
    [style]="{width: '60vw', height: '80vh'}" header="Waiters"\r
    (onHide)="onhideDialogw()"\r
    closable="false" modal="true" styleClass="flex flex-col" [contentStyle]="{ 'flex-grow': '1' }">\r
    <ng-template pTemplate="content">\r
        <app-waiters [orderdet]="currentDetail" [view]="view"></app-waiters>\r
    </ng-template>\r
\r
    <ng-template pTemplate="footer">\r
        <p-button label="Close" icon="pi pi-times" severity="secondary"\r
            (click)="hideDialogw()"></p-button>\r
    </ng-template>\r
\r
</p-dialog>` }]
  }], () => [{ type: OrderDetailsApi }, { type: MessageService }, { type: ProductsApiService }, { type: ConfirmationService }], { order: [{
    type: Input
  }], view: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Details, { className: "Details", filePath: "src/app/orders/component/details/details.ts", lineNumber: 26 });
})();

// src/app/orders/component/commisions/commisions.ts
var _c07 = () => ({ "min-width": "35rem" });
function Commisions_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 5);
    \u0275\u0275text(2, "Waiter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "th", 5);
    \u0275\u0275text(4, "Profits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th", 5);
    \u0275\u0275text(6, "Commission");
    \u0275\u0275elementEnd()();
  }
}
function Commisions_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "td")(7, "div", 6);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const commi_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", commi_r1.waiter.first_name, " ", commi_r1.waiter.last_name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", commi_r1.price, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", commi_r1.waiter_comision, " ");
  }
}
function Commisions_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr");
    \u0275\u0275element(1, "td");
    \u0275\u0275elementStart(2, "td")(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Total: ", ctx_r1.getProfitsTotal(), " ");
  }
}
var Commisions = class _Commisions {
  lista;
  getProfitsTotal() {
    let total = 0;
    this.lista.forEach((element) => {
      total = total + element.price;
    });
    return total;
  }
  static \u0275fac = function Commisions_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Commisions)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Commisions, selectors: [["app-commisions"]], inputs: { lista: "lista" }, decls: 9, vars: 5, consts: [["dt", ""], ["header", ""], ["body", ""], ["footer", ""], [3, "value", "paginator", "lazy", "tableStyle"], [2, "min-width", "2rem"], [1, "text-right"]], template: function Commisions_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "p-table", 4, 0);
      \u0275\u0275template(2, Commisions_ng_template_2_Template, 7, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(4, Commisions_ng_template_4_Template, 9, 4, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(6, Commisions_ng_template_6_Template, 5, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275text(8, ">");
    }
    if (rf & 2) {
      \u0275\u0275property("value", ctx.lista)("paginator", false)("lazy", true)("tableStyle", \u0275\u0275pureFunction0(4, _c07));
    }
  }, dependencies: [TableModule, Table], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Commisions, [{
    type: Component,
    args: [{ selector: "app-commisions", imports: [TableModule], template: `<p-table #dt [value]="this.lista" [paginator]="false" [lazy]="true"\r
    [tableStyle]="{ 'min-width': '35rem' }">\r
\r
    <ng-template #header>\r
        <tr>\r
            <th style="min-width: 2rem">Waiter</th>\r
            <th style="min-width: 2rem">Profits</th>\r
            <th style="min-width: 2rem">Commission</th>\r
        </tr>\r
    </ng-template>\r
    <ng-template #body let-commi>\r
        <tr>\r
\r
            <td>{{commi.waiter.first_name}}\r
                {{commi.waiter.last_name}}</td>\r
            <td>\r
                <div class="text-right">\r
                    {{commi.price}} </div>\r
            </td>\r
            <td>\r
                <div class="text-right">\r
                    {{commi.waiter_comision}} </div>\r
            </td>\r
        </tr>\r
    </ng-template>\r
    <ng-template #footer>\r
        <tr>\r
            <td></td>\r
            <td>\r
                <div class="text-right">\r
                    Total: {{this.getProfitsTotal() }}\r
                </div>\r
            </td>\r
        </tr>\r
    </ng-template>\r
\r
</p-table>>` }]
  }], null, { lista: [{
    type: Input
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Commisions, { className: "Commisions", filePath: "src/app/orders/component/commisions/commisions.ts", lineNumber: 11 });
})();

// src/app/orders/services/orders-api.ts
var OrdersApiService = class _OrdersApiService {
  http;
  apiUrl = "/api/me/orders";
  constructor(http) {
    this.http = http;
  }
  getOrders(type, date_from, date_to, sort, page = 1, lenPage = 15) {
    let params = new HttpParams().set("page", page.toString()).set("lenPage", lenPage.toString());
    if (date_from) {
      params = params.set("date_from", date_from);
    }
    if (date_to) {
      params = params.set("date_to", date_to);
    }
    if (sort) {
      params = params.set("sort", sort);
    }
    if (type) {
      params = params.set("status", type);
    }
    return this.http.get(this.apiUrl, { params });
  }
  getOrderTypes() {
    return this.http.get("/api/orders/types");
  }
  // Creates a new order and returns it (expects backend to return created Order with id)
  createOrder() {
    return this.http.post("/api/orders", {});
  }
  closeOrder(orderId) {
    return this.http.patch(`/api/orders/${orderId}/status/CLOSED`, {});
  }
  paidOrder(orderId) {
    return this.http.patch(`/api/orders/${orderId}/status/PAID`, {});
  }
  voidedOrder(orderId) {
    return this.http.patch(`/api/orders/${orderId}/status/VOIDED`, {});
  }
  moveToCommissiong() {
    return this.http.put("/api/orders/move-to-commissiong", {});
  }
  moveToProcessed() {
    return this.http.put("/api/orders/move-to-processed", {});
  }
  getCommissions(status, date_from, date_to, sort) {
    let params = new HttpParams();
    if (date_from) {
      params = params.set("date_from", date_from);
    }
    if (date_to) {
      params = params.set("date_to", date_to);
    }
    if (sort) {
      params = params.set("sort", sort);
    }
    if (status) {
      params = params.set("status", status);
    }
    return this.http.get("/api/orders/waiter-commissions", { params });
  }
  static \u0275fac = function OrdersApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OrdersApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OrdersApiService, factory: _OrdersApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OrdersApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/orders/component/orders.ts
var _c08 = () => ({ "min-width": "75rem" });
var _c16 = () => ({ width: "90vw", height: "90vh" });
var _c22 = () => ({ "768px": "100vw" });
function Orders_ng_template_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 13);
    \u0275\u0275listener("onClick", function Orders_ng_template_3_Conditional_0_Template_p_button_onClick_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.openNew());
    });
    \u0275\u0275elementEnd();
  }
}
function Orders_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Orders_ng_template_3_Conditional_0_Template, 1, 0, "p-button", 12);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.typeorders === "me" ? 0 : -1);
  }
}
function Orders_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "label", 15);
    \u0275\u0275text(2, "Desde:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p-datepicker", 16);
    \u0275\u0275twoWayListener("ngModelChange", function Orders_ng_template_5_Template_p_datepicker_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.date_from, $event) || (ctx_r2.date_from = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onSelect", function Orders_ng_template_5_Template_p_datepicker_onSelect_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.getOrders());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "label", 17);
    \u0275\u0275text(5, "Hasta:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p-datepicker", 18);
    \u0275\u0275twoWayListener("ngModelChange", function Orders_ng_template_5_Template_p_datepicker_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.date_to, $event) || (ctx_r2.date_to = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onSelect", function Orders_ng_template_5_Template_p_datepicker_onSelect_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.getOrders());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.date_from);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.date_to);
  }
}
function Orders_ng_template_9_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 25);
    \u0275\u0275listener("click", function Orders_ng_template_9_Conditional_4_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.commisions());
    });
    \u0275\u0275elementEnd();
  }
}
function Orders_ng_template_9_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 26);
    \u0275\u0275listener("click", function Orders_ng_template_9_Conditional_5_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.commisioning());
    });
    \u0275\u0275elementEnd();
  }
}
function Orders_ng_template_9_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 27);
    \u0275\u0275listener("click", function Orders_ng_template_9_Conditional_6_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.processing());
    });
    \u0275\u0275elementEnd();
  }
}
function Orders_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "h5", 20);
    \u0275\u0275text(2, "Manage Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275conditionalCreate(4, Orders_ng_template_9_Conditional_4_Template, 1, 0, "p-button", 21);
    \u0275\u0275conditionalCreate(5, Orders_ng_template_9_Conditional_5_Template, 1, 0, "p-button", 22)(6, Orders_ng_template_9_Conditional_6_Template, 1, 0, "p-button", 23);
    \u0275\u0275elementStart(7, "p-select", 24);
    \u0275\u0275twoWayListener("ngModelChange", function Orders_ng_template_9_Template_p_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.type, $event) || (ctx_r2.type = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("onChange", function Orders_ng_template_9_Template_p_select_onChange_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.getOrders());
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.typeorders === "commissiong" || ctx_r2.typeorders === "processing" || ctx_r2.typeorders === "processed" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.typeorders === "commissiong" ? 5 : ctx_r2.typeorders === "processing" ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.type);
    \u0275\u0275property("options", ctx_r2.orderTypes)("disabled", ctx_r2.typedisabled);
  }
}
function Orders_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 28);
    \u0275\u0275text(2, "Id ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "th", 28);
    \u0275\u0275elementStart(4, "th", 28);
    \u0275\u0275text(5, "Status ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th", 28);
    \u0275\u0275text(7, "Waiter Owner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th", 28);
    \u0275\u0275text(9, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th", 29);
    \u0275\u0275text(11, "Final Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th", 29);
    \u0275\u0275text(13, "Waiter Comision");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th", 28);
    \u0275\u0275text(15, "Updated Date");
    \u0275\u0275elementEnd()();
  }
}
function Orders_ng_template_13_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 36);
    \u0275\u0275listener("click", function Orders_ng_template_13_Conditional_4_Conditional_0_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const order_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editOrder(order_r11));
    });
    \u0275\u0275elementEnd();
  }
}
function Orders_ng_template_13_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 37);
    \u0275\u0275listener("click", function Orders_ng_template_13_Conditional_4_Conditional_1_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const order_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.closeOrder(order_r11));
    });
    \u0275\u0275elementEnd();
  }
}
function Orders_ng_template_13_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 38);
    \u0275\u0275listener("click", function Orders_ng_template_13_Conditional_4_Conditional_2_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const order_r11 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.paidOrder(order_r11));
    });
    \u0275\u0275elementEnd();
  }
}
function Orders_ng_template_13_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Orders_ng_template_13_Conditional_4_Conditional_0_Template, 1, 0, "p-button", 33);
    \u0275\u0275conditionalCreate(1, Orders_ng_template_13_Conditional_4_Conditional_1_Template, 1, 0, "p-button", 34);
    \u0275\u0275conditionalCreate(2, Orders_ng_template_13_Conditional_4_Conditional_2_Template, 1, 0, "p-button", 35);
  }
  if (rf & 2) {
    const order_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(order_r11.status === "OPEN" && (ctx_r2.getCurrentUser().id === order_r11.waiter.id || (ctx_r2.getCurrentUser().type === "IN_CHARGE" || ctx_r2.getCurrentUser().type === "ADMINISTRATOR")) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(order_r11.status === "OPEN" && ctx_r2.getCurrentUser().id === order_r11.waiter.id ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(order_r11.status === "CLOSED" && (ctx_r2.getCurrentUser().type === "IN_CHARGE" || ctx_r2.getCurrentUser().type === "ADMINISTRATOR") ? 2 : -1);
  }
}
function Orders_ng_template_13_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 39);
    \u0275\u0275listener("click", function Orders_ng_template_13_Conditional_5_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const order_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.voidedOrder(order_r11));
    });
    \u0275\u0275elementEnd();
  }
}
function Orders_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275conditionalCreate(4, Orders_ng_template_13_Conditional_4_Template, 3, 3);
    \u0275\u0275conditionalCreate(5, Orders_ng_template_13_Conditional_5_Template, 1, 0, "p-button", 30);
    \u0275\u0275elementStart(6, "p-button", 31);
    \u0275\u0275listener("click", function Orders_ng_template_13_Template_p_button_click_6_listener() {
      const order_r11 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewOrder(order_r11));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275element(8, "p-tag", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "td");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(order_r11.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.typeorders === "me" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((order_r11.status === "CLOSED" || order_r11.status === "PAID" || order_r11.status === "COMISSIONED") && (ctx_r2.getCurrentUser().type === "IN_CHARGE" || ctx_r2.getCurrentUser().type === "ADMINISTRATOR") ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("value", order_r11.status)("severity", ctx_r2.getStatusSeverity(order_r11.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", order_r11.waiter.first_name, " ", order_r11.waiter.last_name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(13, 11, order_r11.order_date, "yyyy-MM-dd"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(16, 14, order_r11.price_final, "USD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(19, 17, order_r11.waiter_comision ?? 0, "USD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 20, order_r11.updated_at, "yyyy-MM-dd"));
  }
}
function Orders_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div")(2, "label", 41);
    \u0275\u0275text(3, "Order ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "label", 41);
    \u0275\u0275text(8, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "p-tag", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div")(11, "label", 41);
    \u0275\u0275text(12, "Waiter");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div")(16, "label", 41);
    \u0275\u0275text(17, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 42);
    \u0275\u0275element(22, "app-details", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.currentOrder.id);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.currentOrder.status)("severity", ctx_r2.getStatusSeverity(ctx_r2.currentOrder.status || ""));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2("", ctx_r2.currentOrder.waiter.first_name, " ", ctx_r2.currentOrder.waiter.last_name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(20, 8, ctx_r2.currentOrder.order_date, "yyyy-MM-dd"));
    \u0275\u0275advance(3);
    \u0275\u0275property("order", ctx_r2.currentOrder)("view", ctx_r2.view);
  }
}
function Orders_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-button", 44);
    \u0275\u0275listener("click", function Orders_ng_template_17_Template_p_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.logout());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "p-button", 45);
    \u0275\u0275listener("click", function Orders_ng_template_17_Template_p_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideDialog());
    });
    \u0275\u0275elementEnd();
  }
}
var Orders = class _Orders extends Common {
  ordersService;
  messageService;
  confirmationService;
  route;
  usersService;
  router;
  commisionDialog = false;
  logout() {
    sessionStorage.removeItem("user");
    this.confirmationService.confirm({
      message: "Are you sure you want to log out?",
      header: "Confirm Logout",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.usersService.logout().subscribe({
          next: () => {
            this.messageService.add({ severity: "success", summary: "Successful", detail: "Logged out successfully" });
            this.router.navigate(["/auth/login"]);
          },
          error: (err) => {
            this.messageService.add({ severity: "error", summary: "Error", detail: "Logout failed" });
            this.router.navigate(["/auth/login"]);
          }
        });
      }
    });
  }
  viewOrder(order) {
    this.currentOrder = order;
    this.orderDialog = true;
    this.view = true;
  }
  orderDialog = false;
  submitted = false;
  currentOrder;
  view = false;
  typedisabled = false;
  openNew() {
    this.submitted = false;
    this.view = false;
    this.ordersService.createOrder().subscribe({
      next: (order) => {
        this.currentOrder = order;
        this.orderDialog = true;
        console.log(this.currentOrder);
        this.getOrders();
      },
      error: () => {
        this.messageService.add({ severity: "error", summary: "Error", detail: "Error creating order" });
      }
    });
  }
  lista = [];
  status = "";
  type = "";
  date_from = "";
  date_to = "";
  sort = "desc";
  page = 1;
  perPage = 15;
  pagination;
  first = 0;
  total;
  typeorders = "";
  statusItems = [
    { label: "All", value: "" },
    { label: "Pending", value: "pending" },
    { label: "Completed", value: "completed" },
    { label: "Cancelled", value: "cancelled" }
  ];
  commissions = [];
  orderTypes = [];
  constructor(ordersService, messageService, confirmationService, route, usersService, router) {
    super();
    this.ordersService = ordersService;
    this.messageService = messageService;
    this.confirmationService = confirmationService;
    this.route = route;
    this.usersService = usersService;
    this.router = router;
  }
  ngOnInit() {
    const tod = /* @__PURE__ */ new Date();
    const today = new Date((/* @__PURE__ */ new Date()).setDate(tod.getDate() + 1));
    const twoWeeksAgo = new Date((/* @__PURE__ */ new Date()).setDate(today.getDate() - 20));
    this.date_to = today.toISOString().substring(0, 10);
    this.date_from = twoWeeksAgo.toISOString().substring(0, 10);
    this.loadOrderTypes();
    this.route.params.subscribe((params) => {
      this.typeorders = params["typeorders"];
      this.loadOrderTypes();
    });
  }
  loadOrderTypes() {
    this.ordersService.getOrderTypes().subscribe((types) => {
      this.orderTypes = types;
      console.log(this.orderTypes);
      if (this.orderTypes.length > 0 && (this.typeorders === "me" || this.typeorders === "history")) {
        this.type = this.orderTypes[0].value;
        this.typedisabled = false;
      } else if (this.typeorders === "commissiong") {
        this.type = "PAID";
        this.typedisabled = true;
      } else if (this.typeorders === "processing") {
        this.type = "COMMISSIONING";
        this.typedisabled = true;
      } else if (this.typeorders === "processed") {
        this.type = "PROCESSED";
        this.typedisabled = true;
      }
      this.getOrders();
    });
  }
  getOrders() {
    const d_from = this.date_from ? new Date(this.date_from).toISOString().split("T")[0] : void 0;
    const d_to = this.date_to ? new Date(this.date_to).toISOString().split("T")[0] : void 0;
    this.ordersService.getOrders(this.type, d_from, d_to, this.sort, this.page, this.perPage).subscribe({
      next: (response) => {
        this.lista = response.data;
        this.pagination = response.pagination;
        this.total = this.pagination.total;
      },
      error: (error) => {
        this.messageService.add({ severity: "error", summary: "Error", detail: "Error fetching orders" });
      }
    });
  }
  onPageChange(event) {
    this.first = event.first;
    this.page = Math.floor(event.first / event.rows) + 1;
    this.perPage = event.rows;
    this.getOrders();
  }
  onSort(event) {
    this.sort = event.field + "," + (event.order === 1 ? "asc" : "desc");
    this.getOrders();
  }
  getStatusSeverity(status) {
    switch (status.toUpperCase()) {
      case "PAID":
      case "PROCESSED":
      case "CLOSED":
        return "success";
      case "COMMISSIONING":
        return "warning";
      case "VOIDED":
        return "danger";
      case "OPEN":
      default:
        return "info";
    }
  }
  editOrder(order) {
    this.currentOrder = order;
    this.orderDialog = true;
    this.view = false;
  }
  hideDialog() {
    this.orderDialog = false;
    this.submitted = false;
  }
  onHide() {
    this.getOrders();
  }
  closeOrder(order) {
    this.confirmationService.confirm({
      message: "Are you sure you want to close order " + order.id + "?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.ordersService.closeOrder(order.id).subscribe({
          next: () => {
            this.messageService.add({ severity: "success", summary: "Successful", detail: "Order Closed", life: 3e3 });
            this.getOrders();
          },
          error: (err) => {
            this.messageService.add({ severity: "error", summary: "Error", detail: err.message, life: 3e3 });
          }
        });
      }
    });
  }
  paidOrder(order) {
    this.confirmationService.confirm({
      message: "Are you sure you want to paid order " + order.id + "?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.ordersService.paidOrder(order.id).subscribe({
          next: () => {
            this.messageService.add({ severity: "success", summary: "Successful", detail: "Order mark paid", life: 3e3 });
            this.getOrders();
          },
          error: (err) => {
            this.messageService.add({ severity: "error", summary: "Error", detail: err.message, life: 3e3 });
          }
        });
      }
    });
  }
  voidedOrder(order) {
    this.confirmationService.confirm({
      message: "Are you sure you want to voided order " + order.id + "?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.ordersService.voidedOrder(order.id).subscribe({
          next: () => {
            this.messageService.add({ severity: "success", summary: "Successful", detail: "Order mark paid", life: 3e3 });
            this.getOrders();
          },
          error: (err) => {
            this.messageService.add({ severity: "error", summary: "Error", detail: err.message, life: 3e3 });
          }
        });
      }
    });
  }
  commisioning() {
    this.confirmationService.confirm({
      message: "Are you sure you want commisioning orders?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.ordersService.moveToCommissiong().subscribe({
          next: () => {
            this.messageService.add({ severity: "success", summary: "Successful", detail: "Orders mark how to commissioning", life: 3e3 });
            this.getOrders();
          },
          error: (err) => {
            this.messageService.add({ severity: "error", summary: "Error", detail: err.message, life: 3e3 });
          }
        });
      }
    });
  }
  processing() {
    this.confirmationService.confirm({
      message: "Are you sure you want processing orders?",
      header: "Confirm",
      icon: "pi pi-exclamation-triangle",
      accept: () => {
        this.ordersService.moveToProcessed().subscribe({
          next: () => {
            this.messageService.add({ severity: "success", summary: "Successful", detail: "Order mark how to processing", life: 3e3 });
            this.getOrders();
          },
          error: (err) => {
            this.messageService.add({ severity: "error", summary: "Error", detail: err.message, life: 3e3 });
          }
        });
      }
    });
  }
  commisions() {
    const d_from = this.date_from ? new Date(this.date_from).toISOString().split("T")[0] : void 0;
    const d_to = this.date_to ? new Date(this.date_to).toISOString().split("T")[0] : void 0;
    this.ordersService.getCommissions(this.type, d_from, d_to, "asc").subscribe({
      next: (response) => {
        this.commissions = response;
        this.commisionDialog = true;
      },
      error: (error) => {
        this.messageService.add({ severity: "error", summary: "Error", detail: "Error fetching commissions" });
      }
    });
  }
  static \u0275fac = function Orders_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Orders)(\u0275\u0275directiveInject(OrdersApiService), \u0275\u0275directiveInject(MessageService), \u0275\u0275directiveInject(ConfirmationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UsersApiService), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Orders, selectors: [["app-orders"]], features: [\u0275\u0275ProvidersFeature([MessageService, ConfirmationService]), \u0275\u0275InheritDefinitionFeature], decls: 20, vars: 25, consts: [["start", ""], ["end", ""], ["dt", ""], ["caption", ""], ["header", ""], ["body", ""], ["dataKey", "id", "currentPageReportTemplate", "Showing {first} to {last} of {totalRecords} orders", 3, "onPage", "firstChange", "value", "rows", "paginator", "lazy", "tableStyle", "rowHover", "totalRecords", "first", "showCurrentPageReport"], ["header", "Order Details", 3, "visibleChange", "onHide", "visible", "breakpoints", "modal"], ["pTemplate", "content"], ["pTemplate", "footer"], ["header", "commissions", 3, "visibleChange", "onHide", "visible", "breakpoints", "modal"], [3, "lista"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 1, "mr-2"], ["label", "New", "icon", "pi pi-plus", "severity", "secondary", 1, "mr-2", 3, "onClick"], [1, "flex", "items-center", "gap-2"], ["for", "date_from", 1, "mr-1"], ["dateFormat", "yy-mm-dd", "id", "date_from", "placeholder", "Date From", 3, "ngModelChange", "onSelect", "ngModel"], ["for", "date_to", 1, "mr-1"], ["dateFormat", "yy-mm-dd", "placeholder", "Date To", "id", "date_to", 3, "ngModelChange", "onSelect", "ngModel"], [1, "flex", "items-center", "justify-between"], [1, "m-0"], ["icon", "pi pi-eye", "severity", "info", "label", "", "pTooltip", "View commissions"], ["icon", "pi pi-dollar", "severity", "success", "label", "Commisioning", "pTooltip", "Commisionning Orders"], ["icon", "pi pi-wallet", "severity", "success", "label", "Processing", "pTooltip", "Processing Orders"], ["id", "type", "optionLabel", "name", "optionValue", "value", "placeholder", "Select Type", 3, "ngModelChange", "onChange", "ngModel", "options", "disabled"], ["icon", "pi pi-eye", "severity", "info", "label", "", "pTooltip", "View commissions", 3, "click"], ["icon", "pi pi-dollar", "severity", "success", "label", "Commisioning", "pTooltip", "Commisionning Orders", 3, "click"], ["icon", "pi pi-wallet", "severity", "success", "label", "Processing", "pTooltip", "Processing Orders", 3, "click"], [2, "min-width", "3rem"], [2, "min-width", "5rem"], ["icon", "pi pi-exclamation-triangle", "severity", "danger", "pTooltip", "Voided Order", 1, "mr-2"], ["icon", "pi pi-eye", "severity", "success", "pTooltip", "View Order", 1, "mr-2", 3, "click"], [3, "value", "severity"], ["icon", "pi pi-pencil", "severity", "info", "pTooltip", "Edit Order", 1, "mr-2"], ["icon", "pi pi-times-circle", "severity", "info", "pTooltip", "Close Order", 1, "mr-2"], ["icon", "pi pi-dollar", "severity", "success", "pTooltip", "Mark as Paid Order", 1, "mr-2"], ["icon", "pi pi-pencil", "severity", "info", "pTooltip", "Edit Order", 1, "mr-2", 3, "click"], ["icon", "pi pi-times-circle", "severity", "info", "pTooltip", "Close Order", 1, "mr-2", 3, "click"], ["icon", "pi pi-dollar", "severity", "success", "pTooltip", "Mark as Paid Order", 1, "mr-2", 3, "click"], ["icon", "pi pi-exclamation-triangle", "severity", "danger", "pTooltip", "Voided Order", 1, "mr-2", 3, "click"], [1, "flex", "flex-row", "flex-wrap", "gap-4"], [1, "block", "font-bold", "mb-1"], [1, "mt-4"], [3, "order", "view"], ["label", "Cerrar Session", "icon", "pi pi-times", "severity", "danger", 3, "click"], ["label", "Close", "icon", "pi pi-times", "severity", "secondary", 3, "click"]], template: function Orders_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275element(0, "p-toast")(1, "p-confirmdialog");
      \u0275\u0275elementStart(2, "p-toolbar");
      \u0275\u0275template(3, Orders_ng_template_3_Template, 1, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(5, Orders_ng_template_5_Template, 7, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p-table", 6, 2);
      \u0275\u0275listener("onPage", function Orders_Template_p_table_onPage_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onPageChange($event));
      });
      \u0275\u0275twoWayListener("firstChange", function Orders_Template_p_table_firstChange_7_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.first, $event) || (ctx.first = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275template(9, Orders_ng_template_9_Template, 8, 5, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(11, Orders_ng_template_11_Template, 16, 0, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(13, Orders_ng_template_13_Template, 23, 23, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p-dialog", 7);
      \u0275\u0275twoWayListener("visibleChange", function Orders_Template_p_dialog_visibleChange_15_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.orderDialog, $event) || (ctx.orderDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onHide", function Orders_Template_p_dialog_onHide_15_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onHide());
      });
      \u0275\u0275template(16, Orders_ng_template_16_Template, 23, 11, "ng-template", 8)(17, Orders_ng_template_17_Template, 2, 0, "ng-template", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "p-dialog", 10);
      \u0275\u0275twoWayListener("visibleChange", function Orders_Template_p_dialog_visibleChange_18_listener($event) {
        \u0275\u0275restoreView(_r1);
        \u0275\u0275twoWayBindingSet(ctx.commisionDialog, $event) || (ctx.commisionDialog = $event);
        return \u0275\u0275resetView($event);
      });
      \u0275\u0275listener("onHide", function Orders_Template_p_dialog_onHide_18_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onHide());
      });
      \u0275\u0275element(19, "app-commisions", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("value", ctx.lista)("rows", ctx.perPage)("paginator", true)("lazy", true)("tableStyle", \u0275\u0275pureFunction0(20, _c08))("rowHover", true)("totalRecords", ctx.total);
      \u0275\u0275twoWayProperty("first", ctx.first);
      \u0275\u0275property("showCurrentPageReport", true);
      \u0275\u0275advance(8);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(21, _c16));
      \u0275\u0275twoWayProperty("visible", ctx.orderDialog);
      \u0275\u0275property("breakpoints", \u0275\u0275pureFunction0(22, _c22))("modal", true);
      \u0275\u0275advance(3);
      \u0275\u0275styleMap(\u0275\u0275pureFunction0(23, _c16));
      \u0275\u0275twoWayProperty("visible", ctx.commisionDialog);
      \u0275\u0275property("breakpoints", \u0275\u0275pureFunction0(24, _c22))("modal", true);
      \u0275\u0275advance();
      \u0275\u0275property("lista", ctx.commissions);
    }
  }, dependencies: [
    CommonModule,
    FormsModule,
    NgControlStatus,
    NgModel,
    ToolbarModule,
    Toolbar,
    PrimeTemplate,
    ButtonModule,
    Button,
    TableModule,
    Table,
    IconFieldModule,
    InputIconModule,
    SelectModule,
    Select,
    InputTextModule,
    DialogModule,
    Dialog,
    ToastModule,
    Toast,
    ConfirmDialogModule,
    ConfirmDialog,
    TagModule,
    Tag,
    DatePickerModule,
    DatePicker,
    TooltipModule,
    Tooltip,
    Details,
    Commisions,
    CurrencyPipe,
    DatePipe
  ], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Orders, [{
    type: Component,
    args: [{ selector: "app-orders", imports: [
      CommonModule,
      FormsModule,
      ToolbarModule,
      ButtonModule,
      TableModule,
      IconFieldModule,
      InputIconModule,
      SelectModule,
      InputTextModule,
      DialogModule,
      ToastModule,
      ConfirmDialogModule,
      CurrencyPipe,
      TagModule,
      DatePipe,
      DatePickerModule,
      TooltipModule,
      Details,
      Commisions
    ], providers: [MessageService, ConfirmationService], template: `<p-toast></p-toast>\r
<p-confirmdialog></p-confirmdialog>\r
\r
<p-toolbar>\r
    <ng-template #start>\r
        @if(this.typeorders==='me'){\r
        <p-button label="New" icon="pi pi-plus" severity="secondary"\r
            class="mr-2" (onClick)="openNew()" />\r
        }\r
    </ng-template>\r
\r
    <ng-template #end>\r
        <div class="flex items-center gap-2">\r
            <label for="date_from" class="mr-1">Desde:</label>\r
            <p-datepicker [(ngModel)]="date_from" (onSelect)="getOrders()"\r
                dateFormat="yy-mm-dd" id="date_from"\r
                placeholder="Date From"></p-datepicker>\r
            <label for="date_to" class="mr-1">Hasta:</label>\r
            <p-datepicker [(ngModel)]="date_to" (onSelect)="getOrders()"\r
                dateFormat="yy-mm-dd" placeholder="Date To"\r
                id="date_to"></p-datepicker>\r
        </div>\r
    </ng-template>\r
</p-toolbar>\r
\r
<p-table #dt [value]="lista" [rows]="perPage" [paginator]="true" [lazy]="true"\r
    [tableStyle]="{ 'min-width': '75rem' }"\r
    [rowHover]="true" (onPage)="onPageChange($event)" [totalRecords]="total"\r
    dataKey="id" [(first)]="first"\r
    currentPageReportTemplate="Showing {first} to {last} of {totalRecords} orders"\r
    [showCurrentPageReport]="true">\r
    <ng-template #caption>\r
        <div class="flex items-center justify-between">\r
            <h5 class="m-0">Manage Orders</h5>\r
            <div class="flex items-center gap-2">\r
                @if (this.typeorders==='commissiong' ||\r
                this.typeorders==='processing' ||\r
                this.typeorders==='processed'){\r
                <p-button icon="pi pi-eye" severity="info"\r
                    (click)="commisions()" label\r
                    pTooltip="View commissions"></p-button>\r
                }\r
                @if (this.typeorders==='commissiong'){\r
                <p-button icon="pi pi-dollar" severity="success"\r
                    label="Commisioning"\r
                    (click)="commisioning()"\r
                    pTooltip="Commisionning Orders"></p-button>\r
                }@else if (this.typeorders==='processing'){\r
                <p-button icon="pi pi-wallet" severity="success"\r
                    (click)="processing()" label="Processing"\r
                    pTooltip="Processing Orders"></p-button>\r
                }\r
                <p-select id="type" [(ngModel)]="type" [options]="orderTypes"\r
                    optionLabel="name" optionValue="value"\r
                    [disabled]="typedisabled"\r
                    (onChange)="getOrders()"\r
                    placeholder="Select Type"></p-select>\r
            </div>\r
        </div>\r
    </ng-template>\r
\r
    <ng-template #header>\r
        <tr>\r
            <th style="min-width: 3rem">Id </th>\r
            <th style="min-width: 3rem"></th>\r
            <th style="min-width: 3rem">Status </th>\r
            <th style="min-width: 3rem">Waiter Owner</th>\r
            <th style="min-width: 3rem">Date</th>\r
            <th style="min-width: 5rem">Final Price</th>\r
            <th style="min-width: 5rem">Waiter Comision</th>\r
            <th style="min-width: 3rem">Updated Date</th>\r
        </tr>\r
    </ng-template>\r
    <ng-template #body let-order>\r
        <tr>\r
            <td>{{order.id}}</td>\r
            <td>\r
                @if (this.typeorders==='me'){\r
                @if(order.status === 'OPEN' && (this.getCurrentUser().id ===\r
                order.waiter.id || (this.getCurrentUser().type === 'IN_CHARGE'\r
                || this.getCurrentUser().type === 'ADMINISTRATOR'))){\r
                <p-button icon="pi pi-pencil" severity="info" class="mr-2"\r
                    (click)="editOrder(order)" pTooltip="Edit Order"></p-button>\r
                }\r
                @if(order.status === 'OPEN' && (this.getCurrentUser().id ===\r
                order.waiter.id)){\r
                <p-button icon="pi pi-times-circle" severity="info"\r
                    (click)="closeOrder(order)"\r
                    pTooltip="Close Order" class="mr-2"></p-button>\r
                }\r
                @if(order.status === 'CLOSED' &&\r
                (\r
                this.getCurrentUser().type === 'IN_CHARGE' ||\r
                this.getCurrentUser().type === 'ADMINISTRATOR')){\r
                <p-button icon="pi pi-dollar" severity="success" class="mr-2"\r
                    (click)="paidOrder(order)"\r
                    pTooltip="Mark as Paid Order"></p-button>\r
                }\r
\r
                }\r
                @if(\r
                (order.status === 'CLOSED' || order.status === 'PAID' ||\r
                order.status === 'COMISSIONED') &&\r
                (this.getCurrentUser().type === 'IN_CHARGE' ||\r
                this.getCurrentUser().type === 'ADMINISTRATOR')\r
                ){\r
                <p-button icon="pi pi-exclamation-triangle" severity="danger"\r
                    class="mr-2"\r
                    (click)="voidedOrder(order)"\r
                    pTooltip="Voided Order"></p-button>\r
                }\r
\r
                <p-button icon="pi pi-eye" severity="success"\r
                    class="mr-2"\r
                    (click)="viewOrder(order)"\r
                    pTooltip="View Order"></p-button>\r
            </td>\r
            <td>\r
                <p-tag [value]="order.status"\r
                    [severity]="getStatusSeverity(order.status)"></p-tag>\r
            </td>\r
\r
            <td>{{order.waiter.first_name}} {{order.waiter.last_name}}</td>\r
            <td>{{order.order_date | date:'yyyy-MM-dd'}}</td>\r
            <td>{{order.price_final | currency:'USD'}}</td>\r
            <td>{{order.waiter_comision ?? 0 | currency:'USD'}}</td>\r
            <td>{{order.updated_at | date:'yyyy-MM-dd'}}</td>\r
        </tr>\r
    </ng-template>\r
</p-table>\r
\r
<p-dialog [(visible)]="orderDialog" [breakpoints]="{'768px': '100vw'}"\r
    [style]="{width: '90vw', height: '90vh'}" (onHide)="onHide()"\r
    header="Order Details" [modal]="true">\r
    <ng-template pTemplate="content">\r
        <div class="flex flex-row flex-wrap gap-4">\r
            <div>\r
                <label class="block font-bold mb-1">Order ID</label>\r
                <div>{{ currentOrder.id }}</div>\r
            </div>\r
            <div>\r
                <label class="block font-bold mb-1">Status</label>\r
                <p-tag [value]="currentOrder.status"\r
                    [severity]="getStatusSeverity(currentOrder.status || '')"></p-tag>\r
            </div>\r
            <div>\r
                <label class="block font-bold mb-1">Waiter</label>\r
                <div>{{ currentOrder.waiter.first_name }} {{\r
                    currentOrder.waiter.last_name }}</div>\r
            </div>\r
            <div>\r
                <label class="block font-bold mb-1">Date</label>\r
                <div>{{ currentOrder.order_date | date:'yyyy-MM-dd' }}</div>\r
            </div>\r
\r
        </div>\r
        <div class="mt-4">\r
            <app-details [order]="currentOrder" [view]="view"></app-details>\r
        </div>\r
    </ng-template>\r
    <ng-template pTemplate="footer">\r
        <p-button label="Cerrar Session" icon="pi pi-times" severity="danger"\r
            (click)="logout()"></p-button>\r
        <p-button label="Close" icon="pi pi-times" severity="secondary"\r
            (click)="hideDialog()"></p-button>\r
\r
    </ng-template>\r
</p-dialog>\r
<p-dialog [(visible)]="commisionDialog" [breakpoints]="{'768px': '100vw'}"\r
    [style]="{width: '90vw', height: '90vh'}" (onHide)="onHide()"\r
    header="commissions" [modal]="true">\r
    <app-commisions [lista]="this.commissions"></app-commisions>\r
</p-dialog>` }]
  }], () => [{ type: OrdersApiService }, { type: MessageService }, { type: ConfirmationService }, { type: ActivatedRoute }, { type: UsersApiService }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Orders, { className: "Orders", filePath: "src/app/orders/component/orders.ts", lineNumber: 45 });
})();

// src/app.routes.ts
var appRoutes = [
  {
    path: "",
    component: AppLayout,
    children: [
      { path: "", component: Dashboard },
      { path: "uikit", loadChildren: () => import("./chunk-63F7CK77.js") },
      { path: "documentation", component: Documentation },
      { path: "pages", loadChildren: () => import("./chunk-O6G2A5MB.js") },
      { path: "products", component: Products },
      { path: "users", component: Users },
      { path: "orders/:typeorders", component: Orders },
      { path: "change-password", component: ChangePassword }
    ]
  },
  { path: "notfound", component: Notfound },
  { path: "auth", loadChildren: () => import("./chunk-AVGSL4EJ.js") },
  { path: "**", redirectTo: "/notfound" }
];

// src/app/libs/apis/csrf-cookie-api.ts
var CookieApiService = class _CookieApiService {
  http;
  apiUrl = "/sanctum/csrf-cookie";
  constructor(http) {
    this.http = http;
  }
  csrf() {
    return this.http.get(this.apiUrl, { observe: "response", responseType: "text" });
  }
  static \u0275fac = function CookieApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CookieApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CookieApiService, factory: _CookieApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CookieApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/libs/interceptors/HeadersRequest.ts
function getCookie(name) {
  const nameLenPlus = name.length + 1;
  const cookieValue = document.cookie.split(";").map((c) => c.trim()).filter((cookie) => cookie.substring(0, nameLenPlus) === `${name}=`).map((cookie) => decodeURIComponent(cookie.substring(nameLenPlus)))[0];
  return cookieValue || null;
}
var headersRequestInterceptor = (req, next) => {
  const csrfService = inject(CookieApiService);
  if (req.method === "GET" || req.method === "HEAD") {
    return next(req);
  }
  return csrfService.csrf().pipe(
    // switchMap "espera" a que csrfService.csrf() se complete.
    // Luego, toma la respuesta (que contiene el token) y la usa para
    // crear y devolver un nuevo Observable.
    switchMap((response) => {
      const token = getCookie("XSRF-TOKEN");
      const decodedToken = decodeURIComponent(token || "");
      const modifiedReq = req.clone({
        setHeaders: {
          "X-XSRF-TOKEN": decodedToken
        }
      });
      return next(modifiedReq);
    })
  );
};

// src/app.config.ts
var appConfig = {
  providers: [
    provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: "enabled", scrollPositionRestoration: "enabled" }), withEnabledBlockingInitialNavigation(), withHashLocation()),
    provideHttpClient(withFetch(), withInterceptors([headersRequestInterceptor])),
    provideAnimationsAsync(),
    providePrimeNG({ theme: { preset: Qr, options: { darkModeSelector: ".app-dark" } } })
  ]
};

// src/app.component.ts
var AppComponent = class _AppComponent {
  static \u0275fac = function AppComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "router-outlet");
    }
  }, dependencies: [RouterModule, RouterOutlet], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppComponent, [{
    type: Component,
    args: [{
      selector: "app-root",
      standalone: true,
      imports: [RouterModule],
      template: `<router-outlet></router-outlet>`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AppComponent, { className: "AppComponent", filePath: "src/app.component.ts", lineNumber: 10 });
})();

// src/main.ts
bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
/*! Bundled license information:

@angular/platform-browser/fesm2022/animations/async.mjs:
  (**
   * @license Angular v20.1.3
   * (c) 2010-2025 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
//# sourceMappingURL=main.js.map
