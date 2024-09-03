import type { OrugaOptions, ComponentProps } from "@oruga-ui/oruga-next";
import { isTrueish } from "@oruga-ui/oruga-next";

import "../assets/scss/bulma-build.scss";

export const bulmaConfig: OrugaOptions = {
    field: {
        override: true,
        rootClass: "field",
        labelClass: "label",
        labelSizeClass: "is-",
        messageClass: "help",
        variantMessageClass: "is-",
        addonsClass: "has-addons",
        groupedClass: "is-grouped",
        groupMultilineClass: "is-grouped-multiline",
        horizontalClass: "is-horizontal",
        labelHorizontalClass: "field-label",
        bodyHorizontalClass: "field-body",
        bodyClass: "control",
    },
    input: {
        override: true,
        rootClass: (_: string, props: ComponentProps) => {
            const classes = ["control"];
            if (isTrueish(props.icon)) classes.push("has-icons-left");
            return classes.join(" ");
        },
        inputClass: "input",
        textareaClass: "textarea",
        roundedClass: "is-rounded",
        variantClass: "is-",
        sizeClass: "is-",
        expandedClass: "is-expanded",
        iconLeftClass: "is-left",
        iconRightClass: "is-right",
        counterClass: "help counter",
        hasIconRightClass: "has-icons-right",
    },
    select: {
        override: true,
        rootClass: (_: string, props: ComponentProps) => {
            const classes = ["select", "control"];
            if (isTrueish(props.size)) classes.push(`is-${props.size}`);
            if (isTrueish(props.rounded)) classes.push("is-rounded");
            if (isTrueish(props.multiple)) classes.push("is-multiple");
            if (isTrueish(props.icon)) classes.push("has-icons-left");
            if (isTrueish(props.iconRight)) classes.push("has-icons-right");
            return classes.join(" ");
        },
        rootVariantClass: "is-",
        expandedClass: "is-fullwidth",
        iconLeftClass: "is-left",
        iconRightClass: "is-right",
        placeholderClass: "is-empty",
    },
    icon: {
        override: true,
        rootClass: "icon",
        variantClass: "has-text-",
        sizeClass: "is-",
        clickableClass: "is-clickable",
        spinClass: "is-spin",
    },
    checkbox: {
        override: true,
        rootClass: "checkbox",
        disabledClass: "is-disabled",
        inputClass: "check",
        labelClass: "control-label",
        variantClass: "is-",
        sizeClass: "is-",
    },
    radio: {
        override: true,
        rootClass: "radio",
        disabledClass: "is-disabled",
        inputClass: "check",
        labelClass: "control-label",
        variantClass: "is-",
        sizeClass: "is-",
    },
    switch: {
        override: true,
        rootClass: "switch",
        switchClass: "check",
        positionClass: (value) => `has-${value}-label`,
        roundedClass: "is-rounded",
        labelClass: "control-label",
        sizeClass: "is-",
        variantClass: "is-",
        passiveVariantClass: "is-",
        disabledClass: "is-disabled",
    },
    autocomplete: {
        override: true,
        rootClass: "autocomplete control",
        itemClass: "dropdown-item",
        itemHoverClass: "is-hovered",
        itemEmptyClass: "is-disabled",
        itemGroupTitleClass: "has-text-weight-bold",
    },
    taginput: {
        override: true,
        rootClass: "taginput control",
        containerClass: "taginput-container is-focusable",
        itemClass: "tag",
        closeClass: "delete is-small",
    },
    pagination: {
        override: true,
        rootClass: (_: string, props: ComponentProps) => {
            const classes = ["pagination"];
            if (props.rounded) classes.push("is-rounded");
            return classes.join(" ");
        },
        sizeClass: "is-",
        simpleClass: "is-simple",
        orderClass: "is-",
        listClass: "pagination-list",
        linkClass: "pagination-link",
        linkCurrentClass: "is-current",
        linkDisabledClass: "is-disabled",
        nextButtonClass: "pagination-next",
        prevButtonClass: "pagination-previous",
        infoClass: "info",
    },
    slider: {
        override: true,
        rootClass: "slider",
        disabledClass: "is-disabled",
        trackClass: "slider-track",
        fillClass: "slider-fill",
        thumbWrapperClass: "slider-thumb-wrapper",
        thumbWrapperDraggingClass: "is-dragging",
        thumbRoundedClass: "is-rounded",
        variantClass: "is-",
        sizeClass: "is-",
        thumbClass: "slider-thumb",
        tickLabelClass: "slider-tick-label",
        tickHiddenClass: "is-tick-hidden",
        tickClass: "slider-tick",
    },
    tabs: {
        override: true,
        itemTag: "a",
        rootClass: "b-tabs",
        contentClass: "tab-content",
        multilineClass: "is-multiline",
        navTabsClass: (_: string, props: ComponentProps) => {
            const classes = ["tabs"];
            if (props.type) classes.push(`is-${props.type}`);
            return classes.join(" ");
        },
        expandedClass: "is-fullwidth",
        verticalClass: "is-vertical",
        positionClass: "is-",
        navSizeClass: "is-",
        navPositionClass: "is-",
        transitioningClass: "is-transitioning",
        itemClass: "tab-item",
        itemHeaderActiveClass: () => "is-active",
        itemHeaderDisabledClass: () => "is-disabled",
    },
    table: {
        override: true,
        rootClass: "b-table",
        wrapperClass: "table-wrapper",
        tableClass: "table",
        borderedClass: "is-bordered",
        stripedClass: "is-striped",
        narrowedClass: "is-narrow",
        hoverableClass: "is-hoverable",
        emptyClass: "is-empty",
        detailedClass: "detail",
        footerClass: "table-footer",
        paginationWrapperClass: "level",
        scrollableClass: "table-container",
        stickyHeaderClass: "has-sticky-header",
        trSelectedClass: "is-selected",
        thSortableClass: "is-sortable",
        thCurrentSortClass: "is-current-sort",
        thSortIconClass: "th-wrap sort-icon",
        thUnselectableClass: "is-unselectable",
        thStickyClass: "is-sticky",
        thCheckboxClass: "th-checkbox",
        thDetailedClass: "th-chevron-cell",
        tdDetailedChevronClass: "chevron-cell",
        thPositionClass: (position: string) => {
            if (position === "centered") return "is-centered";
            else if (position === "right") return "is-right";
            return;
        },
        tdPositionClass: (position: string) => {
            if (position === "centered") return "has-text-centered";
            else if (position === "right") return "has-text-right";
            return;
        },
        mobileClass: "is-mobile",
        mobileSortClass: "table-mobile-sort field",
    },
    tooltip: {
        override: true,
        rootClass: (_: string, props: ComponentProps) => {
            const classes = ["b-tooltip"];
            if (props.variant) classes.push(`is-${props.variant}`);
            else classes.push(`is-primary`);
            return classes.join(" ");
        },
        contentClass: "b-tooltip-content",
        triggerClass: "b-tooltip-trigger",
        alwaysClass: "is-always",
        multilineClass: "is-multiline",
        variantClass: "is-",
        positionClass: "is-",
    },
    steps: {
        override: true,
        rootClass: (_: string, props: ComponentProps) => {
            const classes = ["steps-wrapper"];
            if (props.variant) classes.push(`is-${props.variant}`);
            return classes.join(" ");
        },
        stepsClass: (_: string, props: ComponentProps) => {
            const classes = ["steps"];
            if (props.labelPosition === "left") classes.push("has-label-left");
            if (props.labelPosition === "right")
                classes.push("has-label-right");
            return classes.join(" ");
        },
        itemClass: "step-content-item",
        itemHeaderClass: "step-item",
        itemHeaderVariantClass: "is-",
        itemHeaderActiveClass: "is-active",
        itemHeaderPreviousClass: "is-previous",
        stepLinkClass: "step-link",
        stepLinkLabelClass: "step-title",
        stepLinkClickableClass: "is-clickable",
        stepMarkerClass: "step-marker",
        stepMarkerRoundedClass: "is-rounded",
        stepNavigationClass: "step-navigation",
        stepContentClass: "step-content",
        verticalClass: "is-vertical",
        animatedClass: "is-animated",
        positionClass: "is-",
        sizeClass: "is-",
        labelPosition: "is-",
        stepContentTransitioningClass: "is-transitioning",
    },
    button: {
        override: true,
        rootClass: "button",
        sizeClass: "is-",
        variantClass: "is-",
        roundedClass: "is-rounded",
        expandedClass: "is-fullwidth",
        loadingClass: "is-loading",
        outlinedClass: (variant) => {
            if (!variant) return "is-outlined";
            return `is-${variant ?? "primary"} is-outlined`;
        },

        invertedClass: (variant) => {
            if (!variant) return "is-inverted";
            return `is-${variant ?? "primary"} is-inverted`;
        },
        wrapperClass: "button-wrapper",
    },
    menu: {
        override: true,
        rootClass: "menu",
        listClass: "menu-list",
        listLabelClass: "menu-label",
    },
    skeleton: {
        override: true,
        rootClass: "skeleton",
        animationClass: "is-animated",
        positionClass: "is-",
        sizeClass: "is-",
        itemClass: "skeleton-block",
        itemRoundedClass: "is-rounded",
    },
    notification: {
        override: true,
        rootClass: "notification",
        wrapperClass: "media",
        contentClass: "media-content",
        iconClass: "media-left",
        closeClass: "delete",
        positionClass: "is-",
        noticeClass: "notices",
        noticePositionClass: "is-",
        variantClass: "is-",
    },
    dropdown: {
        override: true,
        itemTag: "a",
        rootClass: "dropdown",
        triggerClass: "dropdown-trigger",
        menuClass: "dropdown-content dropdown-menu",
        disabledClass: "is-disabled",
        expandedClass: "is-expanded",
        inlineClass: "is-inline",
        itemClass: "dropdown-item",
        itemActiveClass: "is-active",
        itemDisabledClass: "is-disabled",
        mobileClass: "is-mobile-modal",
        menuMobileOverlayClass: "background",
        positionClass: "is-",
        activeClass: "is-active",
        hoverableClass: "is-hoverable",
    },
    datepicker: {
        override: true,
        rootClass: "datepicker",
        headerClass: "datepicker-header",
        footerClass: "datepicker-footer",
        boxClass: "dropdown-item",
        tableClass: "datepicker-table",
        tableHeadClass: "datepicker-header",
        tableHeadCellClass: "datepicker-cell",
        headerButtonsClass: "pagination field is-centered",
        prevButtonClass: "pagination-previous",
        nextButtonClass: "pagination-next",
        listsClass: "pagination-list",
        tableBodyClass: (_: string, props: ComponentProps) => {
            const classes = ["datepicker-body"];
            if (props.events) classes.push(`has-events`);
            return classes.join(" ");
        },
        tableRowClass: "datepicker-row",
        tableCellClass: "datepicker-cell",
        tableCellSelectableClass: "is-selectable",
        tableCellUnselectableClass: "is-unselectable",
        tableCellTodayClass: "is-today",
        tableCellSelectedClass: "is-selected",
        tableCellWithinHoveredClass: "is-within-hovered",
        tableCellFirstHoveredClass: "is-first-hovered",
        tableCellLastHoveredClass: "is-last-hovered",
        tableCellFirstSelectedClass: "is-first-selected",
        tableCellLastSelectedClass: "is-last-selected",
        tableCellWithinSelectedClass: "is-within-selected",
        tableCellInvisibleClass: "",
        tableCellNearbyClass: "is-nearby",
        tableCellEventsClass: (_: string, props: ComponentProps) => {
            const classes = ["has-event"];
            if (props.indicators) classes.push(`${props.indicators}`);
            return classes.join(" ");
        },
        tableEventVariantClass: "is-",
        tableEventsClass: "events",
        tableEventClass: "event",
        monthBodyClass: "datepicker-body",
        monthCellClass: "datepicker-cell",
        monthCellFirstHoveredClass: "is-first-hovered",
        monthCellFirstSelectedClass: "is-first-selected",
        monthCellLastHoveredClass: "is-last-hovered",
        monthCellLastSelectedClass: "is-last-selected",
        monthCellSelectableClass: "is-selectable",
        monthCellSelectedClass: "is-selected",
        monthCellTodayClass: "is-today",
        monthCellUnselectableClass: "is-unselectable",
        monthCellWithinHoveredClass: "is-within-hovered",
        monthCellWithinSelectedClass: "is-within-selected",
        monthClass: "datepicker-table",
        monthTableClass: "datepicker-months",
    },
    modal: {
        override: true,
        rootClass: "modal",
        activeClass: "is-active",
        overlayClass: "modal-background",
        contentClass: "modal-content",
        closeClass: "modal-close is-large",
        fullScreenClass: "is-full-screen",
        scrollClipClass: "is-clipped",
    },
    sidebar: {
        override: true,
        rootClass: "sidebar",
        overlayClass: "sidebar-background",
        contentClass: "sidebar-content",
        activeClass: "is-active",
        variantClass: "is-",
        positionClass: "is-",
        expandOnHoverClass: "is-expanded",
        fullheightClass: "is-fullheight",
        fullwidthClass: "is-fullwidth",
        reduceClass: "is-mini",
        inlineClass: "is-inline",
        mobileClass: "is-",
    },
    loading: {
        fullPageClass: "is-full-page",
        overlayClass: "loading-overlay",
        iconClass: "icon",
        rootClass: "loading",
    },
    timepicker: {
        override: true,
        rootClass: "timepicker",
        boxClass: "dropdown-item",
        selectClasses: {
            rootClass: "select control",
        },
        separatorClass: "is-colon control",
        footerClass: "timepicker-footer",
        sizeClass: "is-",
    },
    carousel: {
        override: true,
        rootClass: "carousel",
        overlayClass: "is-overlay",
        wrapperClass: "carousel-scene",
        itemsClass: "carousel-items",
        itemsDraggingClass: "is-dragging",
        arrowIconClass: "carousel-arrow",
        arrowIconPrevClass: "has-icons-left",
        arrowIconNextClass: "has-icons-right",
        indicatorsClass: "carousel-indicator",
        indicatorClass: "indicator-item",
        indicatorsInsideClass: "is-inside",
        indicatorsInsidePositionClass: "is-",
        indicatorItemClass: "indicator-style",
        indicatorItemActiveClass: "is-active",
        indicatorItemStyleClass: "is-",
        // CarouselItem
        itemClass: "carousel-item",
        itemActiveClass: "is-active",
    },
    upload: {
        override: true,
        rootClass: "upload control",
        draggableClass: "upload-draggable",
        variantClass: "is-",
        expandedClass: "is-expanded",
        disabledClass: "is-disabled",
        hoveredClass: "is-hovered",
    },
};
