
export const bulmaConfig: any = {
    field: {
        override: true,
        rootClass: 'field',
        labelClass: 'label',
        messageClass: 'help',
        variantClass: 'is-', 
        addonsClass: 'has-addons',
        groupedClass: 'is-grouped',
        groupMultilineClass: 'is-grouped-multiline',
        horizontalClass: 'is-horizontal',
        labelHorizontalClass: 'field-label',
        bodyHorizontalClass: 'field-body'
    },
    input: {
        override: true,
        rootClass: (_: string, { props, instance }: any) => {
            const classes = ['control']
            if (props.icon) classes.push('has-icons-left')
            if (instance.hasIconRight) classes.push('has-icons-right')
            return classes.join(' ').trim()
        },
        inputClass: 'input',
        roundedClass: 'is-rounded',
        variantClass: 'is-',
        sizeClass: 'is-',
        expandedClass: 'is-expanded',
        // iconLeftSpaceClass: 'has-icons has-icons-left',
        iconLeftClass: 'is-left',
        iconRightClass: 'is-right',
        // iconRightSpaceClass: 'has-icons has-icons-right',
        counterClass: 'help counter'
    },
    select: {
        override: true,
        rootClass: (_: string, { props, instance }: any) => {
            const classes = ['control', 'select']
            if (props.size) classes.push(`is-${props.size}`)
            if (instance.rounded) classes.push('is-rounded')
            if (instance.statusVariant) classes.push(`is-${instance.statusVariant}`)
            if (props.multipe) classes.push('is-multiple')
            if (props.icon) classes.push('has-icons-left')
            if (props.iconRight) classes.push('has-icons-right')
            return classes.join(' ').trim()
        },
        // selectClass: '',
        // roundedClass: 'is-rounded',
        // variantClass: 'is-',
        // sizeClass: 'is-',
        expandedClass: 'is-fullwidth',
        // iconLeftSpaceClass: 'has-icons has-icons-left',
        iconLeftClass: 'is-left',
        iconRightClass: 'is-right',
        // iconRightSpaceClass: 'has-icons has-icons-right',
        // arrowClass: '',
        // multipleClass: 'is-multiple',
        placeholderClass: 'is-empty'
    },
    icon: {
        override: true,
        rootClass: 'icon',
        variantClass: 'has-text-',
        sizeClass: 'is-'
    },
    checkbox: {
        override: true,
        rootClass: 'checkbox'
    },
    radio: {
        override: true,
        rootClass: 'radio'
    }
}