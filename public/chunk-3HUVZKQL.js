import {
  AutoFocus,
  BaseEditableHolder,
  BaseIcon,
  BaseModelHolder,
  BaseStyle,
  CommonModule,
  Fluid,
  HttpClient,
  NG_VALUE_ACCESSOR,
  NgClass,
  NgControl,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  PrimeTemplate,
  SharedModule,
  bt,
  s2 as s,
  vt
} from "./chunk-6JBQ36YE.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate
} from "./chunk-LDLKK7HI.js";

// node_modules/@primeuix/styles/dist/textarea/index.mjs
var style = "\n    .p-textarea {\n        font-family: inherit;\n        font-feature-settings: inherit;\n        font-size: 1rem;\n        color: dt('textarea.color');\n        background: dt('textarea.background');\n        padding-block: dt('textarea.padding.y');\n        padding-inline: dt('textarea.padding.x');\n        border: 1px solid dt('textarea.border.color');\n        transition:\n            background dt('textarea.transition.duration'),\n            color dt('textarea.transition.duration'),\n            border-color dt('textarea.transition.duration'),\n            outline-color dt('textarea.transition.duration'),\n            box-shadow dt('textarea.transition.duration');\n        appearance: none;\n        border-radius: dt('textarea.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('textarea.shadow');\n    }\n\n    .p-textarea:enabled:hover {\n        border-color: dt('textarea.hover.border.color');\n    }\n\n    .p-textarea:enabled:focus {\n        border-color: dt('textarea.focus.border.color');\n        box-shadow: dt('textarea.focus.ring.shadow');\n        outline: dt('textarea.focus.ring.width') dt('textarea.focus.ring.style') dt('textarea.focus.ring.color');\n        outline-offset: dt('textarea.focus.ring.offset');\n    }\n\n    .p-textarea.p-invalid {\n        border-color: dt('textarea.invalid.border.color');\n    }\n\n    .p-textarea.p-variant-filled {\n        background: dt('textarea.filled.background');\n    }\n\n    .p-textarea.p-variant-filled:enabled:hover {\n        background: dt('textarea.filled.hover.background');\n    }\n\n    .p-textarea.p-variant-filled:enabled:focus {\n        background: dt('textarea.filled.focus.background');\n    }\n\n    .p-textarea:disabled {\n        opacity: 1;\n        background: dt('textarea.disabled.background');\n        color: dt('textarea.disabled.color');\n    }\n\n    .p-textarea::placeholder {\n        color: dt('textarea.placeholder.color');\n    }\n\n    .p-textarea.p-invalid::placeholder {\n        color: dt('textarea.invalid.placeholder.color');\n    }\n\n    .p-textarea-fluid {\n        width: 100%;\n    }\n\n    .p-textarea-resizable {\n        overflow: hidden;\n        resize: none;\n    }\n\n    .p-textarea-sm {\n        font-size: dt('textarea.sm.font.size');\n        padding-block: dt('textarea.sm.padding.y');\n        padding-inline: dt('textarea.sm.padding.x');\n    }\n\n    .p-textarea-lg {\n        font-size: dt('textarea.lg.font.size');\n        padding-block: dt('textarea.lg.padding.y');\n        padding-inline: dt('textarea.lg.padding.x');\n    }\n";

// node_modules/primeng/fesm2022/primeng-textarea.mjs
var theme = (
  /*css*/
  `
    ${style}

    /* For PrimeNG */
    .p-textarea.ng-invalid.ng-dirty {
        border-color: dt('textarea.invalid.border.color');
    }
    .p-textarea.ng-invalid.ng-dirty::placeholder {
        color: dt('textarea.invalid.placeholder.color');
    }
`
);
var classes = {
  root: ({
    instance
  }) => ["p-textarea p-component", {
    "p-filled": instance.$filled(),
    "p-textarea-resizable ": instance.autoResize,
    "p-variant-filled": instance.$variant() === "filled",
    "p-textarea-fluid": instance.hasFluid,
    "p-inputfield-sm p-textarea-sm": instance.pSize === "small",
    "p-textarea-lg p-inputfield-lg": instance.pSize === "large",
    "p-invalid": instance.invalid()
  }]
};
var TextareaStyle = class _TextareaStyle extends BaseStyle {
  name = "textarea";
  theme = theme;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275TextareaStyle_BaseFactory;
    return function TextareaStyle_Factory(__ngFactoryType__) {
      return (\u0275TextareaStyle_BaseFactory || (\u0275TextareaStyle_BaseFactory = \u0275\u0275getInheritedFactory(_TextareaStyle)))(__ngFactoryType__ || _TextareaStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _TextareaStyle,
    factory: _TextareaStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaStyle, [{
    type: Injectable
  }], null, null);
})();
var TextareaClasses;
(function(TextareaClasses2) {
  TextareaClasses2["root"] = "p-textarea";
})(TextareaClasses || (TextareaClasses = {}));
var Textarea = class _Textarea extends BaseModelHolder {
  /**
   * When present, textarea size changes as being typed.
   * @group Props
   */
  autoResize;
  /**
   * Defines the size of the component.
   * @group Props
   */
  pSize;
  /**
   * Specifies the input variant of the component.
   * @defaultValue undefined
   * @group Props
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : []);
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, ...ngDevMode ? [{
    debugName: "fluid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  /**
   * When present, it specifies that the component should have invalid state style.
   * @defaultValue false
   * @group Props
   */
  invalid = input(void 0, ...ngDevMode ? [{
    debugName: "invalid",
    transform: booleanAttribute
  }] : [{
    transform: booleanAttribute
  }]);
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : []);
  /**
   * Callback to invoke on textarea resize.
   * @param {(Event | {})} event - Custom resize event.
   * @group Emits
   */
  onResize = new EventEmitter();
  ngControlSubscription;
  _componentStyle = inject(TextareaStyle);
  ngControl = inject(NgControl, {
    optional: true,
    self: true
  });
  pcFluid = inject(Fluid, {
    optional: true,
    host: true,
    skipSelf: true
  });
  get hasFluid() {
    return this.fluid() ?? !!this.pcFluid;
  }
  ngOnInit() {
    super.ngOnInit();
    if (this.ngControl) {
      this.ngControlSubscription = this.ngControl.valueChanges.subscribe(() => {
        this.updateState();
      });
    }
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (this.autoResize) this.resize();
    this.cd.detectChanges();
  }
  ngAfterViewChecked() {
    if (this.autoResize) {
      this.resize();
    }
    this.writeModelValue(this.ngControl?.value ?? this.el.nativeElement.value);
  }
  onInput(e) {
    this.writeModelValue(e.target["value"]);
    this.updateState();
  }
  resize(event) {
    this.el.nativeElement.style.height = "auto";
    this.el.nativeElement.style.height = this.el.nativeElement.scrollHeight + "px";
    if (parseFloat(this.el.nativeElement.style.height) >= parseFloat(this.el.nativeElement.style.maxHeight)) {
      this.el.nativeElement.style.overflowY = "scroll";
      this.el.nativeElement.style.height = this.el.nativeElement.style.maxHeight;
    } else {
      this.el.nativeElement.style.overflow = "hidden";
    }
    this.onResize.emit(event || {});
  }
  updateState() {
    if (this.autoResize) {
      this.resize();
    }
  }
  ngOnDestroy() {
    if (this.ngControlSubscription) {
      this.ngControlSubscription.unsubscribe();
    }
    super.ngOnDestroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Textarea_BaseFactory;
    return function Textarea_Factory(__ngFactoryType__) {
      return (\u0275Textarea_BaseFactory || (\u0275Textarea_BaseFactory = \u0275\u0275getInheritedFactory(_Textarea)))(__ngFactoryType__ || _Textarea);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _Textarea,
    selectors: [["", "pTextarea", ""], ["", "pInputTextarea", ""]],
    hostVars: 2,
    hostBindings: function Textarea_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function Textarea_input_HostBindingHandler($event) {
          return ctx.onInput($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      autoResize: [2, "autoResize", "autoResize", booleanAttribute],
      pSize: "pSize",
      variant: [1, "variant"],
      fluid: [1, "fluid"],
      invalid: [1, "invalid"]
    },
    outputs: {
      onResize: "onResize"
    },
    features: [\u0275\u0275ProvidersFeature([TextareaStyle]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Textarea, [{
    type: Directive,
    args: [{
      selector: "[pTextarea], [pInputTextarea]",
      standalone: true,
      host: {
        "[class]": "cx('root')"
      },
      providers: [TextareaStyle]
    }]
  }], null, {
    autoResize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    pSize: [{
      type: Input
    }],
    onResize: [{
      type: Output
    }],
    onInput: [{
      type: HostListener,
      args: ["input", ["$event"]]
    }]
  });
})();
var TextareaModule = class _TextareaModule {
  static \u0275fac = function TextareaModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TextareaModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _TextareaModule,
    imports: [Textarea],
    exports: [Textarea]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TextareaModule, [{
    type: NgModule,
    args: [{
      imports: [Textarea],
      exports: [Textarea]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-star.mjs
var _c0 = ["data-p-icon", "star"];
var StarIcon = class _StarIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    super.ngOnInit();
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StarIcon_BaseFactory;
    return function StarIcon_Factory(__ngFactoryType__) {
      return (\u0275StarIcon_BaseFactory || (\u0275StarIcon_BaseFactory = \u0275\u0275getInheritedFactory(_StarIcon)))(__ngFactoryType__ || _StarIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StarIcon,
    selectors: [["", "data-p-icon", "star"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c0,
    decls: 5,
    vars: 2,
    consts: [["d", "M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function StarIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="star"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M10.9741 13.6721C10.8806 13.6719 10.7886 13.6483 10.7066 13.6033L7.00002 11.6545L3.29345 13.6033C3.19926 13.6539 3.09281 13.6771 2.98612 13.6703C2.87943 13.6636 2.77676 13.6271 2.6897 13.5651C2.60277 13.5014 2.53529 13.4147 2.4948 13.3148C2.45431 13.215 2.44241 13.1058 2.46042 12.9995L3.17881 8.87264L0.167699 5.95324C0.0922333 5.8777 0.039368 5.78258 0.0150625 5.67861C-0.00924303 5.57463 -0.00402231 5.46594 0.030136 5.36477C0.0621323 5.26323 0.122141 5.17278 0.203259 5.10383C0.284377 5.03488 0.383311 4.99023 0.488681 4.97501L4.63087 4.37126L6.48797 0.618832C6.54083 0.530159 6.61581 0.456732 6.70556 0.405741C6.79532 0.35475 6.89678 0.327942 7.00002 0.327942C7.10325 0.327942 7.20471 0.35475 7.29447 0.405741C7.38422 0.456732 7.4592 0.530159 7.51206 0.618832L9.36916 4.37126L13.5114 4.97501C13.6167 4.99023 13.7157 5.03488 13.7968 5.10383C13.8779 5.17278 13.9379 5.26323 13.9699 5.36477C14.0041 5.46594 14.0093 5.57463 13.985 5.67861C13.9607 5.78258 13.9078 5.8777 13.8323 5.95324L10.8212 8.87264L11.532 12.9995C11.55 13.1058 11.5381 13.215 11.4976 13.3148C11.4571 13.4147 11.3896 13.5014 11.3027 13.5651C11.2059 13.632 11.0917 13.6692 10.9741 13.6721ZM7.00002 10.4393C7.09251 10.4404 7.18371 10.4613 7.2675 10.5005L10.2098 12.029L9.65193 8.75036C9.6368 8.6584 9.64343 8.56418 9.6713 8.47526C9.69918 8.38633 9.74751 8.30518 9.81242 8.23832L12.1969 5.94559L8.90298 5.45648C8.81188 5.44198 8.72555 5.406 8.65113 5.35152C8.57671 5.29703 8.51633 5.2256 8.475 5.14314L7.00002 2.1626L5.52503 5.15078C5.4837 5.23324 5.42332 5.30467 5.3489 5.35916C5.27448 5.41365 5.18815 5.44963 5.09705 5.46412L1.80318 5.94559L4.18761 8.23832C4.25252 8.30518 4.30085 8.38633 4.32873 8.47526C4.3566 8.56418 4.36323 8.6584 4.3481 8.75036L3.7902 12.0519L6.73253 10.5234C6.81451 10.4762 6.9058 10.4475 7.00002 10.4393Z"
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

// node_modules/primeng/fesm2022/primeng-icons-starfill.mjs
var _c02 = ["data-p-icon", "star-fill"];
var StarFillIcon = class _StarFillIcon extends BaseIcon {
  pathId;
  ngOnInit() {
    super.ngOnInit();
    this.pathId = "url(#" + s() + ")";
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275StarFillIcon_BaseFactory;
    return function StarFillIcon_Factory(__ngFactoryType__) {
      return (\u0275StarFillIcon_BaseFactory || (\u0275StarFillIcon_BaseFactory = \u0275\u0275getInheritedFactory(_StarFillIcon)))(__ngFactoryType__ || _StarFillIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _StarFillIcon,
    selectors: [["", "data-p-icon", "star-fill"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c02,
    decls: 5,
    vars: 2,
    consts: [["d", "M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z", "fill", "currentColor"], [3, "id"], ["width", "14", "height", "14", "fill", "white"]],
    template: function StarFillIcon_Template(rf, ctx) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StarFillIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="star-fill"]',
      standalone: true,
      template: `
        <svg:g [attr.clip-path]="pathId">
            <svg:path
                d="M13.9718 5.36453C13.9398 5.26298 13.8798 5.17252 13.7986 5.10356C13.7175 5.0346 13.6186 4.98994 13.5132 4.97472L9.37043 4.37088L7.51307 0.617955C7.46021 0.529271 7.38522 0.455834 7.29545 0.404836C7.20568 0.353838 7.1042 0.327026 7.00096 0.327026C6.89771 0.327026 6.79624 0.353838 6.70647 0.404836C6.6167 0.455834 6.54171 0.529271 6.48885 0.617955L4.63149 4.37088L0.488746 4.97472C0.383363 4.98994 0.284416 5.0346 0.203286 5.10356C0.122157 5.17252 0.0621407 5.26298 0.03014 5.36453C-0.00402286 5.46571 -0.00924428 5.57442 0.0150645 5.67841C0.0393733 5.7824 0.0922457 5.87753 0.167722 5.95308L3.17924 8.87287L2.4684 13.0003C2.45038 13.1066 2.46229 13.2158 2.50278 13.3157C2.54328 13.4156 2.61077 13.5022 2.6977 13.5659C2.78477 13.628 2.88746 13.6644 2.99416 13.6712C3.10087 13.678 3.20733 13.6547 3.30153 13.6042L7.00096 11.6551L10.708 13.6042C10.79 13.6491 10.882 13.6728 10.9755 13.673C11.0958 13.6716 11.2129 13.6343 11.3119 13.5659C11.3988 13.5022 11.4663 13.4156 11.5068 13.3157C11.5473 13.2158 11.5592 13.1066 11.5412 13.0003L10.8227 8.87287L13.8266 5.95308C13.9033 5.87835 13.9577 5.7836 13.9833 5.67957C14.009 5.57554 14.005 5.4664 13.9718 5.36453Z"
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

// node_modules/@primeuix/styles/dist/rating/index.mjs
var style2 = "\n    .p-rating {\n        position: relative;\n        display: flex;\n        align-items: center;\n        gap: dt('rating.gap');\n    }\n\n    .p-rating-option {\n        display: inline-flex;\n        align-items: center;\n        cursor: pointer;\n        outline-color: transparent;\n        border-radius: 50%;\n        transition:\n            background dt('rating.transition.duration'),\n            color dt('rating.transition.duration'),\n            border-color dt('rating.transition.duration'),\n            outline-color dt('rating.transition.duration'),\n            box-shadow dt('rating.transition.duration');\n    }\n\n    .p-rating-option.p-focus-visible {\n        box-shadow: dt('rating.focus.ring.shadow');\n        outline: dt('rating.focus.ring.width') dt('rating.focus.ring.style') dt('rating.focus.ring.color');\n        outline-offset: dt('rating.focus.ring.offset');\n    }\n\n    .p-rating-icon {\n        color: dt('rating.icon.color');\n        transition:\n            background dt('rating.transition.duration'),\n            color dt('rating.transition.duration'),\n            border-color dt('rating.transition.duration'),\n            outline-color dt('rating.transition.duration'),\n            box-shadow dt('rating.transition.duration');\n        font-size: dt('rating.icon.size');\n        width: dt('rating.icon.size');\n        height: dt('rating.icon.size');\n    }\n\n    .p-rating:not(.p-disabled):not(.p-readonly) .p-rating-option:hover .p-rating-icon {\n        color: dt('rating.icon.hover.color');\n    }\n\n    .p-rating-option-active .p-rating-icon {\n        color: dt('rating.icon.active.color');\n    }\n\n    .p-rating-icon.p-invalid {\n        /* @todo */\n        stroke: dt('rating.invalid.icon.color');\n    }\n\n    .p-rating.p-readonly .p-rating-option {\n        cursor: not-allowed;\n    }\n";

// node_modules/primeng/fesm2022/primeng-rating.mjs
var _c03 = ["onicon"];
var _c1 = ["officon"];
var _c2 = (a0, a1) => ({
  star: a0,
  value: a1
});
var _c3 = (a0, a1) => ({
  $implicit: a0,
  class: a1
});
function Rating_ng_template_0_Conditional_3_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Rating_ng_template_0_Conditional_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Rating_ng_template_0_Conditional_3_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const star_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.onIconTemplate || ctx_r2._onIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c3, star_r2 + 1, ctx_r2.cx("onIcon")));
  }
}
function Rating_ng_template_0_Conditional_3_Conditional_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r2.cx("onIcon"));
    \u0275\u0275property("ngStyle", ctx_r2.iconOnStyle)("ngClass", ctx_r2.iconOnClass);
    \u0275\u0275attribute("data-pc-section", "onIcon");
  }
}
function Rating_ng_template_0_Conditional_3_Conditional_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 8);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r2.cx("onIcon"));
    \u0275\u0275property("ngStyle", ctx_r2.iconOnStyle);
    \u0275\u0275attribute("data-pc-section", "onIcon");
  }
}
function Rating_ng_template_0_Conditional_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Rating_ng_template_0_Conditional_3_Conditional_1_span_0_Template, 1, 5, "span", 5)(1, Rating_ng_template_0_Conditional_3_Conditional_1__svg_svg_1_Template, 1, 4, "svg", 6);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r2.iconOnClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.iconOnClass);
  }
}
function Rating_ng_template_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Rating_ng_template_0_Conditional_3_Conditional_0_Template, 1, 5, "ng-container")(1, Rating_ng_template_0_Conditional_3_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.onIconTemplate || ctx_r2._onIconTemplate ? 0 : 1);
  }
}
function Rating_ng_template_0_Conditional_4_Conditional_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function Rating_ng_template_0_Conditional_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Rating_ng_template_0_Conditional_4_Conditional_0_ng_container_0_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const star_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r2.offIconTemplate || ctx_r2._offIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c3, star_r2 + 1, ctx_r2.cx("offIcon")));
  }
}
function Rating_ng_template_0_Conditional_4_Conditional_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r2.cx("offIcon"));
    \u0275\u0275property("ngStyle", ctx_r2.iconOffStyle)("ngClass", ctx_r2.iconOffClass);
    \u0275\u0275attribute("data-pc-section", "offIcon");
  }
}
function Rating_ng_template_0_Conditional_4_Conditional_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 10);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classMap(ctx_r2.cx("offIcon"));
    \u0275\u0275property("ngStyle", ctx_r2.iconOffStyle);
    \u0275\u0275attribute("data-pc-section", "offIcon");
  }
}
function Rating_ng_template_0_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Rating_ng_template_0_Conditional_4_Conditional_1_span_0_Template, 1, 5, "span", 5)(1, Rating_ng_template_0_Conditional_4_Conditional_1__svg_svg_1_Template, 1, 4, "svg", 9);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngIf", ctx_r2.iconOffClass);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.iconOffClass);
  }
}
function Rating_ng_template_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, Rating_ng_template_0_Conditional_4_Conditional_0_Template, 1, 5, "ng-container")(1, Rating_ng_template_0_Conditional_4_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r2.offIconTemplate || ctx_r2._offIconTemplate ? 0 : 1);
  }
}
function Rating_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function Rating_ng_template_0_Template_div_click_0_listener($event) {
      const star_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onOptionClick($event, star_r2 + 1));
    });
    \u0275\u0275elementStart(1, "span", 2)(2, "input", 3);
    \u0275\u0275listener("focus", function Rating_ng_template_0_Template_input_focus_2_listener($event) {
      const star_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputFocus($event, star_r2 + 1));
    })("blur", function Rating_ng_template_0_Template_input_blur_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onInputBlur($event));
    })("change", function Rating_ng_template_0_Template_input_change_2_listener($event) {
      const star_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onChange($event, star_r2 + 1));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(3, Rating_ng_template_0_Conditional_3_Template, 2, 1)(4, Rating_ng_template_0_Conditional_4_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r2.cx("option", \u0275\u0275pureFunction2(13, _c2, star_r2, ctx_r2.value)));
    \u0275\u0275advance();
    \u0275\u0275attribute("data-p-hidden-accessible", true);
    \u0275\u0275advance();
    \u0275\u0275property("value", star_r2 + 1)("checked", ctx_r2.value === star_r2 + 1)("pAutoFocus", ctx_r2.autofocus);
    \u0275\u0275attribute("name", ctx_r2.name() || ctx_r2.nameattr + "_name")("value", ctx_r2.modelValue())("required", ctx_r2.required() ? "" : void 0)("readonly", ctx_r2.readonly ? "" : void 0)("disabled", ctx_r2.$disabled() ? "" : void 0)("aria-label", ctx_r2.starAriaLabel(star_r2 + 1));
    \u0275\u0275advance();
    \u0275\u0275conditional(star_r2 + 1 <= ctx_r2.value ? 3 : 4);
  }
}
var theme2 = (
  /*css*/
  `
    ${style2}

    /* For PrimeNG */
    p-rating.ng-invalid.ng-dirty > .p-rating > .p-rating-icon {
        stroke: dt('rating.invalid.icon.color');
    }
`
);
var classes2 = {
  root: ({
    instance
  }) => ["p-rating", {
    "p-readonly": instance.readonly,
    "p-disabled": instance.$disabled()
  }],
  option: ({
    instance,
    star,
    value
  }) => ["p-rating-option", {
    "p-rating-option-active": star + 1 <= value,
    "p-focus-visible": star + 1 === instance.focusedOptionIndex() && instance.isFocusVisibleItem
  }],
  onIcon: ({
    instance
  }) => ["p-rating-icon p-rating-on-icon", {
    "p-invalid": instance.invalid()
  }],
  offIcon: ({
    instance
  }) => ["p-rating-icon p-rating-off-icon", {
    "p-invalid": instance.invalid()
  }]
};
var RatingStyle = class _RatingStyle extends BaseStyle {
  name = "rating";
  theme = theme2;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275RatingStyle_BaseFactory;
    return function RatingStyle_Factory(__ngFactoryType__) {
      return (\u0275RatingStyle_BaseFactory || (\u0275RatingStyle_BaseFactory = \u0275\u0275getInheritedFactory(_RatingStyle)))(__ngFactoryType__ || _RatingStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _RatingStyle,
    factory: _RatingStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingStyle, [{
    type: Injectable
  }], null, null);
})();
var RatingClasses;
(function(RatingClasses2) {
  RatingClasses2["root"] = "p-rating";
  RatingClasses2["option"] = "p-rating-option";
  RatingClasses2["onIcon"] = "p-rating-on-icon";
  RatingClasses2["offIcon"] = "p-rating-off-icon";
})(RatingClasses || (RatingClasses = {}));
var RATING_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Rating),
  multi: true
};
var Rating = class _Rating extends BaseEditableHolder {
  /**
   * When present, changing the value is not possible.
   * @group Props
   */
  readonly;
  /**
   * Number of stars.
   * @group Props
   */
  stars = 5;
  /**
   * Style class of the on icon.
   * @group Props
   */
  iconOnClass;
  /**
   * Inline style of the on icon.
   * @group Props
   */
  iconOnStyle;
  /**
   * Style class of the off icon.
   * @group Props
   */
  iconOffClass;
  /**
   * Inline style of the off icon.
   * @group Props
   */
  iconOffStyle;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Emitted on value change.
   * @param {RatingRateEvent} value - Custom rate event.
   * @group Emits
   */
  onRate = new EventEmitter();
  /**
   * Emitted when the rating receives focus.
   * @param {Event} value - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Emitted when the rating loses focus.
   * @param {Event} value - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  /**
   * Custom on icon template.
   * @group Templates
   */
  onIconTemplate;
  /**
   * Custom off icon template.
   * @group Templates
   */
  offIconTemplate;
  templates;
  value;
  starsArray;
  isFocusVisibleItem = true;
  focusedOptionIndex = signal(-1, ...ngDevMode ? [{
    debugName: "focusedOptionIndex"
  }] : []);
  nameattr;
  _componentStyle = inject(RatingStyle);
  _onIconTemplate;
  _offIconTemplate;
  ngOnInit() {
    super.ngOnInit();
    this.nameattr = this.nameattr || s("pn_id_");
    this.starsArray = [];
    for (let i = 0; i < this.stars; i++) {
      this.starsArray[i] = i;
    }
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "onicon":
          this._onIconTemplate = item.template;
          break;
        case "officon":
          this._offIconTemplate = item.template;
          break;
      }
    });
  }
  onOptionClick(event, value) {
    if (!this.readonly && !this.$disabled()) {
      this.onOptionSelect(event, value);
      this.isFocusVisibleItem = false;
      const firstFocusableEl = vt(event.currentTarget, "");
      firstFocusableEl && bt(firstFocusableEl);
    }
  }
  onOptionSelect(event, value) {
    if (!this.readonly && !this.$disabled()) {
      if (this.focusedOptionIndex() === value || value === this.value) {
        this.focusedOptionIndex.set(-1);
        this.updateModel(event, null);
      } else {
        this.focusedOptionIndex.set(value);
        this.updateModel(event, value || null);
      }
    }
  }
  onChange(event, value) {
    this.onOptionSelect(event, value);
    this.isFocusVisibleItem = true;
  }
  onInputBlur(event) {
    this.focusedOptionIndex.set(-1);
    this.onBlur.emit(event);
  }
  onInputFocus(event, value) {
    if (!this.readonly && !this.$disabled()) {
      this.focusedOptionIndex.set(value);
      this.isFocusVisibleItem = event.sourceCapabilities?.firesTouchEvents === false;
      this.onFocus.emit(event);
    }
  }
  updateModel(event, value) {
    this.writeValue(value);
    this.onModelChange(this.value);
    this.onModelTouched();
    this.onRate.emit({
      originalEvent: event,
      value
    });
  }
  starAriaLabel(value) {
    return value === 1 ? this.config.translation.aria.star : this.config.translation.aria.stars.replace(/{star}/g, value);
  }
  getIconTemplate(i) {
    return !this.value || i >= this.value ? this.offIconTemplate || this._offIconTemplate : this.onIconTemplate || this.offIconTemplate;
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.value = value;
    setModelValue(value);
  }
  get isCustomIcon() {
    return !!(this.onIconTemplate || this._onIconTemplate || this.offIconTemplate || this._offIconTemplate);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Rating_BaseFactory;
    return function Rating_Factory(__ngFactoryType__) {
      return (\u0275Rating_BaseFactory || (\u0275Rating_BaseFactory = \u0275\u0275getInheritedFactory(_Rating)))(__ngFactoryType__ || _Rating);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Rating,
    selectors: [["p-rating"]],
    contentQueries: function Rating_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c03, 4);
        \u0275\u0275contentQuery(dirIndex, _c1, 4);
        \u0275\u0275contentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.onIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.offIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 4,
    hostBindings: function Rating_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-pc-name", "rating")("data-pc-section", "root");
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      readonly: [2, "readonly", "readonly", booleanAttribute],
      stars: [2, "stars", "stars", numberAttribute],
      iconOnClass: "iconOnClass",
      iconOnStyle: "iconOnStyle",
      iconOffClass: "iconOffClass",
      iconOffStyle: "iconOffStyle",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onRate: "onRate",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([RATING_VALUE_ACCESSOR, RatingStyle]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["ngFor", "", 3, "ngForOf"], [3, "click"], [1, "p-hidden-accessible"], ["type", "radio", 3, "focus", "blur", "change", "value", "checked", "pAutoFocus"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "ngStyle", "ngClass", 4, "ngIf"], ["data-p-icon", "star-fill", 3, "ngStyle", "class", 4, "ngIf"], [3, "ngStyle", "ngClass"], ["data-p-icon", "star-fill", 3, "ngStyle"], ["data-p-icon", "star", 3, "ngStyle", "class", 4, "ngIf"], ["data-p-icon", "star", 3, "ngStyle"]],
    template: function Rating_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, Rating_ng_template_0_Template, 5, 16, "ng-template", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngForOf", ctx.starsArray);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, AutoFocus, StarFillIcon, StarIcon, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Rating, [{
    type: Component,
    args: [{
      selector: "p-rating",
      imports: [CommonModule, AutoFocus, StarFillIcon, StarIcon, SharedModule],
      standalone: true,
      template: `
        <ng-template ngFor [ngForOf]="starsArray" let-star let-i="index">
            <div [class]="cx('option', { star, value })" (click)="onOptionClick($event, star + 1)">
                <span class="p-hidden-accessible" [attr.data-p-hidden-accessible]="true">
                    <input
                        type="radio"
                        [value]="star + 1"
                        [attr.name]="name() || nameattr + '_name'"
                        [attr.value]="modelValue()"
                        [attr.required]="required() ? '' : undefined"
                        [attr.readonly]="readonly ? '' : undefined"
                        [attr.disabled]="$disabled() ? '' : undefined"
                        [checked]="value === star + 1"
                        [attr.aria-label]="starAriaLabel(star + 1)"
                        (focus)="onInputFocus($event, star + 1)"
                        (blur)="onInputBlur($event)"
                        (change)="onChange($event, star + 1)"
                        [pAutoFocus]="autofocus"
                    />
                </span>
                @if (star + 1 <= value) {
                    @if (onIconTemplate || _onIconTemplate) {
                        <ng-container *ngTemplateOutlet="onIconTemplate || _onIconTemplate; context: { $implicit: star + 1, class: cx('onIcon') }"></ng-container>
                    } @else {
                        <span [class]="cx('onIcon')" *ngIf="iconOnClass" [ngStyle]="iconOnStyle" [ngClass]="iconOnClass" [attr.data-pc-section]="'onIcon'"></span>
                        <svg data-p-icon="star-fill" *ngIf="!iconOnClass" [ngStyle]="iconOnStyle" [class]="cx('onIcon')" [attr.data-pc-section]="'onIcon'" />
                    }
                } @else {
                    @if (offIconTemplate || _offIconTemplate) {
                        <ng-container *ngTemplateOutlet="offIconTemplate || _offIconTemplate; context: { $implicit: star + 1, class: cx('offIcon') }"></ng-container>
                    } @else {
                        <span [class]="cx('offIcon')" *ngIf="iconOffClass" [ngStyle]="iconOffStyle" [ngClass]="iconOffClass" [attr.data-pc-section]="'offIcon'"></span>
                        <svg data-p-icon="star" *ngIf="!iconOffClass" [ngStyle]="iconOffStyle" [class]="cx('offIcon')" [attr.data-pc-section]="'offIcon'" />
                    }
                }
            </div>
        </ng-template>
    `,
      providers: [RATING_VALUE_ACCESSOR, RatingStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cx('root')",
        "[attr.data-pc-name]": "'rating'",
        "[attr.data-pc-section]": "'root'"
      }
    }]
  }], null, {
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stars: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    iconOnClass: [{
      type: Input
    }],
    iconOnStyle: [{
      type: Input
    }],
    iconOffClass: [{
      type: Input
    }],
    iconOffStyle: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onRate: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onIconTemplate: [{
      type: ContentChild,
      args: ["onicon", {
        descendants: false
      }]
    }],
    offIconTemplate: [{
      type: ContentChild,
      args: ["officon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var RatingModule = class _RatingModule {
  static \u0275fac = function RatingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RatingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _RatingModule,
    imports: [Rating, SharedModule],
    exports: [Rating, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Rating, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RatingModule, [{
    type: NgModule,
    args: [{
      imports: [Rating, SharedModule],
      exports: [Rating, SharedModule]
    }]
  }], null, null);
})();

// src/app/pages/service/product.service.ts
var ProductService = class _ProductService {
  http;
  getProductsData() {
    return [
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1001",
        code: "nvklal433",
        name: "Black Watch",
        description: "Product Description",
        image: "black-watch.jpg",
        price: 72,
        category: "Accessories",
        quantity: 61,
        inventoryStatus: "INSTOCK",
        rating: 4
      },
      {
        id: "1002",
        code: "zz21cz3c1",
        name: "Blue Band",
        description: "Product Description",
        image: "blue-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 3
      },
      {
        id: "1003",
        code: "244wgerg2",
        name: "Blue T-Shirt",
        description: "Product Description",
        image: "blue-t-shirt.jpg",
        price: 29,
        category: "Clothing",
        quantity: 25,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1004",
        code: "h456wer53",
        name: "Bracelet",
        description: "Product Description",
        image: "bracelet.jpg",
        price: 15,
        category: "Accessories",
        quantity: 73,
        inventoryStatus: "INSTOCK",
        rating: 4
      },
      {
        id: "1005",
        code: "av2231fwg",
        name: "Brown Purse",
        description: "Product Description",
        image: "brown-purse.jpg",
        price: 120,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4
      },
      {
        id: "1006",
        code: "bib36pfvm",
        name: "Chakra Bracelet",
        description: "Product Description",
        image: "chakra-bracelet.jpg",
        price: 32,
        category: "Accessories",
        quantity: 5,
        inventoryStatus: "LOWSTOCK",
        rating: 3
      },
      {
        id: "1007",
        code: "mbvjkgip5",
        name: "Galaxy Earrings",
        description: "Product Description",
        image: "galaxy-earrings.jpg",
        price: 34,
        category: "Accessories",
        quantity: 23,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1008",
        code: "vbb124btr",
        name: "Game Controller",
        description: "Product Description",
        image: "game-controller.jpg",
        price: 99,
        category: "Electronics",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 4
      },
      {
        id: "1009",
        code: "cm230f032",
        name: "Gaming Set",
        description: "Product Description",
        image: "gaming-set.jpg",
        price: 299,
        category: "Electronics",
        quantity: 63,
        inventoryStatus: "INSTOCK",
        rating: 3
      },
      {
        id: "1010",
        code: "plb34234v",
        name: "Gold Phone Case",
        description: "Product Description",
        image: "gold-phone-case.jpg",
        price: 24,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4
      },
      {
        id: "1011",
        code: "4920nnc2d",
        name: "Green Earbuds",
        description: "Product Description",
        image: "green-earbuds.jpg",
        price: 89,
        category: "Electronics",
        quantity: 23,
        inventoryStatus: "INSTOCK",
        rating: 4
      },
      {
        id: "1012",
        code: "250vm23cc",
        name: "Green T-Shirt",
        description: "Product Description",
        image: "green-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 74,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1013",
        code: "fldsmn31b",
        name: "Grey T-Shirt",
        description: "Product Description",
        image: "grey-t-shirt.jpg",
        price: 48,
        category: "Clothing",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 3
      },
      {
        id: "1014",
        code: "waas1x2as",
        name: "Headphones",
        description: "Product Description",
        image: "headphones.jpg",
        price: 175,
        category: "Electronics",
        quantity: 8,
        inventoryStatus: "LOWSTOCK",
        rating: 5
      },
      {
        id: "1015",
        code: "vb34btbg5",
        name: "Light Green T-Shirt",
        description: "Product Description",
        image: "light-green-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 34,
        inventoryStatus: "INSTOCK",
        rating: 4
      },
      {
        id: "1016",
        code: "k8l6j58jl",
        name: "Lime Band",
        description: "Product Description",
        image: "lime-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 12,
        inventoryStatus: "INSTOCK",
        rating: 3
      },
      {
        id: "1017",
        code: "v435nn85n",
        name: "Mini Speakers",
        description: "Product Description",
        image: "mini-speakers.jpg",
        price: 85,
        category: "Clothing",
        quantity: 42,
        inventoryStatus: "INSTOCK",
        rating: 4
      },
      {
        id: "1018",
        code: "09zx9c0zc",
        name: "Painted Phone Case",
        description: "Product Description",
        image: "painted-phone-case.jpg",
        price: 56,
        category: "Accessories",
        quantity: 41,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1019",
        code: "mnb5mb2m5",
        name: "Pink Band",
        description: "Product Description",
        image: "pink-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 63,
        inventoryStatus: "INSTOCK",
        rating: 4
      },
      {
        id: "1020",
        code: "r23fwf2w3",
        name: "Pink Purse",
        description: "Product Description",
        image: "pink-purse.jpg",
        price: 110,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4
      },
      {
        id: "1021",
        code: "pxpzczo23",
        name: "Purple Band",
        description: "Product Description",
        image: "purple-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 6,
        inventoryStatus: "LOWSTOCK",
        rating: 3
      },
      {
        id: "1022",
        code: "2c42cb5cb",
        name: "Purple Gemstone Necklace",
        description: "Product Description",
        image: "purple-gemstone-necklace.jpg",
        price: 45,
        category: "Accessories",
        quantity: 62,
        inventoryStatus: "INSTOCK",
        rating: 4
      },
      {
        id: "1023",
        code: "5k43kkk23",
        name: "Purple T-Shirt",
        description: "Product Description",
        image: "purple-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 5
      },
      {
        id: "1024",
        code: "lm2tny2k4",
        name: "Shoes",
        description: "Product Description",
        image: "shoes.jpg",
        price: 64,
        category: "Clothing",
        quantity: 0,
        inventoryStatus: "INSTOCK",
        rating: 4
      },
      {
        id: "1025",
        code: "nbm5mv45n",
        name: "Sneakers",
        description: "Product Description",
        image: "sneakers.jpg",
        price: 78,
        category: "Clothing",
        quantity: 52,
        inventoryStatus: "INSTOCK",
        rating: 4
      },
      {
        id: "1026",
        code: "zx23zc42c",
        name: "Teal T-Shirt",
        description: "Product Description",
        image: "teal-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 3,
        inventoryStatus: "LOWSTOCK",
        rating: 3
      },
      {
        id: "1027",
        code: "acvx872gc",
        name: "Yellow Earbuds",
        description: "Product Description",
        image: "yellow-earbuds.jpg",
        price: 89,
        category: "Electronics",
        quantity: 35,
        inventoryStatus: "INSTOCK",
        rating: 3
      },
      {
        id: "1028",
        code: "tx125ck42",
        name: "Yoga Mat",
        description: "Product Description",
        image: "yoga-mat.jpg",
        price: 20,
        category: "Fitness",
        quantity: 15,
        inventoryStatus: "INSTOCK",
        rating: 5
      },
      {
        id: "1029",
        code: "gwuby345v",
        name: "Yoga Set",
        description: "Product Description",
        image: "yoga-set.jpg",
        price: 20,
        category: "Fitness",
        quantity: 25,
        inventoryStatus: "INSTOCK",
        rating: 8
      }
    ];
  }
  getProductsWithOrdersData() {
    return [
      {
        id: "1000",
        code: "f230fh0g3",
        name: "Bamboo Watch",
        description: "Product Description",
        image: "bamboo-watch.jpg",
        price: 65,
        category: "Accessories",
        quantity: 24,
        inventoryStatus: "INSTOCK",
        rating: 5,
        orders: [
          {
            id: "1000-0",
            productCode: "f230fh0g3",
            date: "2020-09-13",
            amount: 65,
            quantity: 1,
            customer: "David James",
            status: "PENDING"
          },
          {
            id: "1000-1",
            productCode: "f230fh0g3",
            date: "2020-05-14",
            amount: 130,
            quantity: 2,
            customer: "Leon Rodrigues",
            status: "DELIVERED"
          },
          {
            id: "1000-2",
            productCode: "f230fh0g3",
            date: "2019-01-04",
            amount: 65,
            quantity: 1,
            customer: "Juan Alejandro",
            status: "RETURNED"
          },
          {
            id: "1000-3",
            productCode: "f230fh0g3",
            date: "2020-09-13",
            amount: 195,
            quantity: 3,
            customer: "Claire Morrow",
            status: "CANCELLED"
          }
        ]
      },
      {
        id: "1001",
        code: "nvklal433",
        name: "Black Watch",
        description: "Product Description",
        image: "black-watch.jpg",
        price: 72,
        category: "Accessories",
        quantity: 61,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1001-0",
            productCode: "nvklal433",
            date: "2020-05-14",
            amount: 72,
            quantity: 1,
            customer: "Maisha Jefferson",
            status: "DELIVERED"
          },
          {
            id: "1001-1",
            productCode: "nvklal433",
            date: "2020-02-28",
            amount: 144,
            quantity: 2,
            customer: "Octavia Murillo",
            status: "PENDING"
          }
        ]
      },
      {
        id: "1002",
        code: "zz21cz3c1",
        name: "Blue Band",
        description: "Product Description",
        image: "blue-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 3,
        orders: [
          {
            id: "1002-0",
            productCode: "zz21cz3c1",
            date: "2020-07-05",
            amount: 79,
            quantity: 1,
            customer: "Stacey Leja",
            status: "DELIVERED"
          },
          {
            id: "1002-1",
            productCode: "zz21cz3c1",
            date: "2020-02-06",
            amount: 79,
            quantity: 1,
            customer: "Ashley Wickens",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1003",
        code: "244wgerg2",
        name: "Blue T-Shirt",
        description: "Product Description",
        image: "blue-t-shirt.jpg",
        price: 29,
        category: "Clothing",
        quantity: 25,
        inventoryStatus: "INSTOCK",
        rating: 5,
        orders: []
      },
      {
        id: "1004",
        code: "h456wer53",
        name: "Bracelet",
        description: "Product Description",
        image: "bracelet.jpg",
        price: 15,
        category: "Accessories",
        quantity: 73,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1004-0",
            productCode: "h456wer53",
            date: "2020-09-05",
            amount: 60,
            quantity: 4,
            customer: "Mayumi Misaki",
            status: "PENDING"
          },
          {
            id: "1004-1",
            productCode: "h456wer53",
            date: "2019-04-16",
            amount: 2,
            quantity: 30,
            customer: "Francesco Salvatore",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1005",
        code: "av2231fwg",
        name: "Brown Purse",
        description: "Product Description",
        image: "brown-purse.jpg",
        price: 120,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4,
        orders: [
          {
            id: "1005-0",
            productCode: "av2231fwg",
            date: "2020-01-25",
            amount: 120,
            quantity: 1,
            customer: "Isabel Sinclair",
            status: "RETURNED"
          },
          {
            id: "1005-1",
            productCode: "av2231fwg",
            date: "2019-03-12",
            amount: 240,
            quantity: 2,
            customer: "Lionel Clifford",
            status: "DELIVERED"
          },
          {
            id: "1005-2",
            productCode: "av2231fwg",
            date: "2019-05-05",
            amount: 120,
            quantity: 1,
            customer: "Cody Chavez",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1006",
        code: "bib36pfvm",
        name: "Chakra Bracelet",
        description: "Product Description",
        image: "chakra-bracelet.jpg",
        price: 32,
        category: "Accessories",
        quantity: 5,
        inventoryStatus: "LOWSTOCK",
        rating: 3,
        orders: [
          {
            id: "1006-0",
            productCode: "bib36pfvm",
            date: "2020-02-24",
            amount: 32,
            quantity: 1,
            customer: "Arvin Darci",
            status: "DELIVERED"
          },
          {
            id: "1006-1",
            productCode: "bib36pfvm",
            date: "2020-01-14",
            amount: 64,
            quantity: 2,
            customer: "Izzy Jones",
            status: "PENDING"
          }
        ]
      },
      {
        id: "1007",
        code: "mbvjkgip5",
        name: "Galaxy Earrings",
        description: "Product Description",
        image: "galaxy-earrings.jpg",
        price: 34,
        category: "Accessories",
        quantity: 23,
        inventoryStatus: "INSTOCK",
        rating: 5,
        orders: [
          {
            id: "1007-0",
            productCode: "mbvjkgip5",
            date: "2020-06-19",
            amount: 34,
            quantity: 1,
            customer: "Jennifer Smith",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1008",
        code: "vbb124btr",
        name: "Game Controller",
        description: "Product Description",
        image: "game-controller.jpg",
        price: 99,
        category: "Electronics",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 4,
        orders: [
          {
            id: "1008-0",
            productCode: "vbb124btr",
            date: "2020-01-05",
            amount: 99,
            quantity: 1,
            customer: "Jeanfrancois David",
            status: "DELIVERED"
          },
          {
            id: "1008-1",
            productCode: "vbb124btr",
            date: "2020-01-19",
            amount: 198,
            quantity: 2,
            customer: "Ivar Greenwood",
            status: "RETURNED"
          }
        ]
      },
      {
        id: "1009",
        code: "cm230f032",
        name: "Gaming Set",
        description: "Product Description",
        image: "gaming-set.jpg",
        price: 299,
        category: "Electronics",
        quantity: 63,
        inventoryStatus: "INSTOCK",
        rating: 3,
        orders: [
          {
            id: "1009-0",
            productCode: "cm230f032",
            date: "2020-06-24",
            amount: 299,
            quantity: 1,
            customer: "Kadeem Mujtaba",
            status: "PENDING"
          },
          {
            id: "1009-1",
            productCode: "cm230f032",
            date: "2020-05-11",
            amount: 299,
            quantity: 1,
            customer: "Ashley Wickens",
            status: "DELIVERED"
          },
          {
            id: "1009-2",
            productCode: "cm230f032",
            date: "2019-02-07",
            amount: 299,
            quantity: 1,
            customer: "Julie Johnson",
            status: "DELIVERED"
          },
          {
            id: "1009-3",
            productCode: "cm230f032",
            date: "2020-04-26",
            amount: 299,
            quantity: 1,
            customer: "Tony Costa",
            status: "CANCELLED"
          }
        ]
      },
      {
        id: "1010",
        code: "plb34234v",
        name: "Gold Phone Case",
        description: "Product Description",
        image: "gold-phone-case.jpg",
        price: 24,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4,
        orders: [
          {
            id: "1010-0",
            productCode: "plb34234v",
            date: "2020-02-04",
            amount: 24,
            quantity: 1,
            customer: "James Butt",
            status: "DELIVERED"
          },
          {
            id: "1010-1",
            productCode: "plb34234v",
            date: "2020-05-05",
            amount: 48,
            quantity: 2,
            customer: "Josephine Darakjy",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1011",
        code: "4920nnc2d",
        name: "Green Earbuds",
        description: "Product Description",
        image: "green-earbuds.jpg",
        price: 89,
        category: "Electronics",
        quantity: 23,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1011-0",
            productCode: "4920nnc2d",
            date: "2020-06-01",
            amount: 89,
            quantity: 1,
            customer: "Art Venere",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1012",
        code: "250vm23cc",
        name: "Green T-Shirt",
        description: "Product Description",
        image: "green-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 74,
        inventoryStatus: "INSTOCK",
        rating: 5,
        orders: [
          {
            id: "1012-0",
            productCode: "250vm23cc",
            date: "2020-02-05",
            amount: 49,
            quantity: 1,
            customer: "Lenna Paprocki",
            status: "DELIVERED"
          },
          {
            id: "1012-1",
            productCode: "250vm23cc",
            date: "2020-02-15",
            amount: 49,
            quantity: 1,
            customer: "Donette Foller",
            status: "PENDING"
          }
        ]
      },
      {
        id: "1013",
        code: "fldsmn31b",
        name: "Grey T-Shirt",
        description: "Product Description",
        image: "grey-t-shirt.jpg",
        price: 48,
        category: "Clothing",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 3,
        orders: [
          {
            id: "1013-0",
            productCode: "fldsmn31b",
            date: "2020-04-01",
            amount: 48,
            quantity: 1,
            customer: "Simona Morasca",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1014",
        code: "waas1x2as",
        name: "Headphones",
        description: "Product Description",
        image: "headphones.jpg",
        price: 175,
        category: "Electronics",
        quantity: 8,
        inventoryStatus: "LOWSTOCK",
        rating: 5,
        orders: [
          {
            id: "1014-0",
            productCode: "waas1x2as",
            date: "2020-05-15",
            amount: 175,
            quantity: 1,
            customer: "Lenna Paprocki",
            status: "DELIVERED"
          },
          {
            id: "1014-1",
            productCode: "waas1x2as",
            date: "2020-01-02",
            amount: 175,
            quantity: 1,
            customer: "Donette Foller",
            status: "CANCELLED"
          }
        ]
      },
      {
        id: "1015",
        code: "vb34btbg5",
        name: "Light Green T-Shirt",
        description: "Product Description",
        image: "light-green-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 34,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1015-0",
            productCode: "vb34btbg5",
            date: "2020-07-02",
            amount: 98,
            quantity: 2,
            customer: "Mitsue Tollner",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1016",
        code: "k8l6j58jl",
        name: "Lime Band",
        description: "Product Description",
        image: "lime-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 12,
        inventoryStatus: "INSTOCK",
        rating: 3,
        orders: []
      },
      {
        id: "1017",
        code: "v435nn85n",
        name: "Mini Speakers",
        description: "Product Description",
        image: "mini-speakers.jpg",
        price: 85,
        category: "Clothing",
        quantity: 42,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1017-0",
            productCode: "v435nn85n",
            date: "2020-07-12",
            amount: 85,
            quantity: 1,
            customer: "Minna Amigon",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1018",
        code: "09zx9c0zc",
        name: "Painted Phone Case",
        description: "Product Description",
        image: "painted-phone-case.jpg",
        price: 56,
        category: "Accessories",
        quantity: 41,
        inventoryStatus: "INSTOCK",
        rating: 5,
        orders: [
          {
            id: "1018-0",
            productCode: "09zx9c0zc",
            date: "2020-07-01",
            amount: 56,
            quantity: 1,
            customer: "Abel Maclead",
            status: "DELIVERED"
          },
          {
            id: "1018-1",
            productCode: "09zx9c0zc",
            date: "2020-05-02",
            amount: 56,
            quantity: 1,
            customer: "Minna Amigon",
            status: "RETURNED"
          }
        ]
      },
      {
        id: "1019",
        code: "mnb5mb2m5",
        name: "Pink Band",
        description: "Product Description",
        image: "pink-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 63,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: []
      },
      {
        id: "1020",
        code: "r23fwf2w3",
        name: "Pink Purse",
        description: "Product Description",
        image: "pink-purse.jpg",
        price: 110,
        category: "Accessories",
        quantity: 0,
        inventoryStatus: "OUTOFSTOCK",
        rating: 4,
        orders: [
          {
            id: "1020-0",
            productCode: "r23fwf2w3",
            date: "2020-05-29",
            amount: 110,
            quantity: 1,
            customer: "Kiley Caldarera",
            status: "DELIVERED"
          },
          {
            id: "1020-1",
            productCode: "r23fwf2w3",
            date: "2020-02-11",
            amount: 220,
            quantity: 2,
            customer: "Graciela Ruta",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1021",
        code: "pxpzczo23",
        name: "Purple Band",
        description: "Product Description",
        image: "purple-band.jpg",
        price: 79,
        category: "Fitness",
        quantity: 6,
        inventoryStatus: "LOWSTOCK",
        rating: 3,
        orders: [
          {
            id: "1021-0",
            productCode: "pxpzczo23",
            date: "2020-02-02",
            amount: 79,
            quantity: 1,
            customer: "Cammy Albares",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1022",
        code: "2c42cb5cb",
        name: "Purple Gemstone Necklace",
        description: "Product Description",
        image: "purple-gemstone-necklace.jpg",
        price: 45,
        category: "Accessories",
        quantity: 62,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1022-0",
            productCode: "2c42cb5cb",
            date: "2020-06-29",
            amount: 45,
            quantity: 1,
            customer: "Mattie Poquette",
            status: "DELIVERED"
          },
          {
            id: "1022-1",
            productCode: "2c42cb5cb",
            date: "2020-02-11",
            amount: 135,
            quantity: 3,
            customer: "Meaghan Garufi",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1023",
        code: "5k43kkk23",
        name: "Purple T-Shirt",
        description: "Product Description",
        image: "purple-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 2,
        inventoryStatus: "LOWSTOCK",
        rating: 5,
        orders: [
          {
            id: "1023-0",
            productCode: "5k43kkk23",
            date: "2020-04-15",
            amount: 49,
            quantity: 1,
            customer: "Gladys Rim",
            status: "RETURNED"
          }
        ]
      },
      {
        id: "1024",
        code: "lm2tny2k4",
        name: "Shoes",
        description: "Product Description",
        image: "shoes.jpg",
        price: 64,
        category: "Clothing",
        quantity: 0,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: []
      },
      {
        id: "1025",
        code: "nbm5mv45n",
        name: "Sneakers",
        description: "Product Description",
        image: "sneakers.jpg",
        price: 78,
        category: "Clothing",
        quantity: 52,
        inventoryStatus: "INSTOCK",
        rating: 4,
        orders: [
          {
            id: "1025-0",
            productCode: "nbm5mv45n",
            date: "2020-02-19",
            amount: 78,
            quantity: 1,
            customer: "Yuki Whobrey",
            status: "DELIVERED"
          },
          {
            id: "1025-1",
            productCode: "nbm5mv45n",
            date: "2020-05-21",
            amount: 78,
            quantity: 1,
            customer: "Fletcher Flosi",
            status: "PENDING"
          }
        ]
      },
      {
        id: "1026",
        code: "zx23zc42c",
        name: "Teal T-Shirt",
        description: "Product Description",
        image: "teal-t-shirt.jpg",
        price: 49,
        category: "Clothing",
        quantity: 3,
        inventoryStatus: "LOWSTOCK",
        rating: 3,
        orders: [
          {
            id: "1026-0",
            productCode: "zx23zc42c",
            date: "2020-04-24",
            amount: 98,
            quantity: 2,
            customer: "Bette Nicka",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1027",
        code: "acvx872gc",
        name: "Yellow Earbuds",
        description: "Product Description",
        image: "yellow-earbuds.jpg",
        price: 89,
        category: "Electronics",
        quantity: 35,
        inventoryStatus: "INSTOCK",
        rating: 3,
        orders: [
          {
            id: "1027-0",
            productCode: "acvx872gc",
            date: "2020-01-29",
            amount: 89,
            quantity: 1,
            customer: "Veronika Inouye",
            status: "DELIVERED"
          },
          {
            id: "1027-1",
            productCode: "acvx872gc",
            date: "2020-06-11",
            amount: 89,
            quantity: 1,
            customer: "Willard Kolmetz",
            status: "DELIVERED"
          }
        ]
      },
      {
        id: "1028",
        code: "tx125ck42",
        name: "Yoga Mat",
        description: "Product Description",
        image: "yoga-mat.jpg",
        price: 20,
        category: "Fitness",
        quantity: 15,
        inventoryStatus: "INSTOCK",
        rating: 5,
        orders: []
      },
      {
        id: "1029",
        code: "gwuby345v",
        name: "Yoga Set",
        description: "Product Description",
        image: "yoga-set.jpg",
        price: 20,
        category: "Fitness",
        quantity: 25,
        inventoryStatus: "INSTOCK",
        rating: 8,
        orders: [
          {
            id: "1029-0",
            productCode: "gwuby345v",
            date: "2020-02-14",
            amount: 4,
            quantity: 80,
            customer: "Maryann Royster",
            status: "DELIVERED"
          }
        ]
      }
    ];
  }
  status = ["OUTOFSTOCK", "INSTOCK", "LOWSTOCK"];
  productNames = [
    "Bamboo Watch",
    "Black Watch",
    "Blue Band",
    "Blue T-Shirt",
    "Bracelet",
    "Brown Purse",
    "Chakra Bracelet",
    "Galaxy Earrings",
    "Game Controller",
    "Gaming Set",
    "Gold Phone Case",
    "Green Earbuds",
    "Green T-Shirt",
    "Grey T-Shirt",
    "Headphones",
    "Light Green T-Shirt",
    "Lime Band",
    "Mini Speakers",
    "Painted Phone Case",
    "Pink Band",
    "Pink Purse",
    "Purple Band",
    "Purple Gemstone Necklace",
    "Purple T-Shirt",
    "Shoes",
    "Sneakers",
    "Teal T-Shirt",
    "Yellow Earbuds",
    "Yoga Mat",
    "Yoga Set"
  ];
  constructor(http) {
    this.http = http;
  }
  getProductsMini() {
    return Promise.resolve(this.getProductsData().slice(0, 5));
  }
  getProductsSmall() {
    return Promise.resolve(this.getProductsData().slice(0, 10));
  }
  getProducts() {
    return Promise.resolve(this.getProductsData());
  }
  getProductsWithOrdersSmall() {
    return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
  }
  generatePrduct() {
    const product = {
      id: this.generateId(),
      name: this.generateName(),
      description: "Product Description",
      price: this.generatePrice(),
      quantity: this.generateQuantity(),
      category: "Product Category",
      inventoryStatus: this.generateStatus(),
      rating: this.generateRating()
    };
    product.image = product.name?.toLocaleLowerCase().split(/[ ,]+/).join("-") + ".jpg";
    return product;
  }
  generateId() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  generateName() {
    return this.productNames[Math.floor(Math.random() * Math.floor(30))];
  }
  generatePrice() {
    return Math.floor(Math.random() * Math.floor(299) + 1);
  }
  generateQuantity() {
    return Math.floor(Math.random() * Math.floor(75) + 1);
  }
  generateStatus() {
    return this.status[Math.floor(Math.random() * Math.floor(3))];
  }
  generateRating() {
    return Math.floor(Math.random() * Math.floor(5) + 1);
  }
  static \u0275fac = function ProductService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProductService, factory: _ProductService.\u0275fac });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductService, [{
    type: Injectable
  }], () => [{ type: HttpClient }], null);
})();

export {
  Textarea,
  TextareaModule,
  Rating,
  RatingModule,
  ProductService
};
//# sourceMappingURL=chunk-3HUVZKQL.js.map
