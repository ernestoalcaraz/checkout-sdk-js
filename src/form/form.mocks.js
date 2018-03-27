/**
 * @returns {Field[]}
 */
export function getFormFields() {
    return [{
        id: 'field_4',
        name: 'firstName',
        custom: false,
        label: 'First Name',
        required: true,
        default: '',
    }, {
        id: 'field_5',
        name: 'lastName',
        custom: false,
        label: 'Last Name',
        required: true,
        default: '',
    }, {
        id: 'field_6',
        name: 'company',
        custom: false,
        label: 'Company Name',
        required: false,
        default: '',
    }, {
        id: 'field_7',
        name: 'phone',
        custom: false,
        label: 'Phone Number',
        required: true,
        default: '',
    }, {
        id: 'field_8',
        name: 'addressLine1',
        custom: false,
        label: 'Address Line 1',
        required: true,
        default: '',
    }, {
        id: 'field_9',
        name: 'addressLine2',
        custom: false,
        label: 'Address Line 2',
        required: false,
        default: '',
    }, {
        id: 'field_10',
        name: 'city',
        custom: false,
        label: 'Suburb/City',
        required: true,
        default: '',
    }, {
        id: 'field_11',
        name: 'countryCode',
        custom: false,
        label: 'Country',
        required: true,
        default: null,
    }, {
        id: 'field_12',
        name: 'province',
        custom: false,
        label: 'State/Province',
        required: true,
        default: null,
    }, {
        id: 'field_13',
        name: 'postCode',
        custom: false,
        label: 'Zip/Postcode',
        required: true,
        default: '',
    }, {
        id: 'field_25',
        name: 'field_25',
        custom: true,
        label: 'picklist',
        required: false,
        default: null,
        type: 'array',
        fieldType: 'dropdown',
        itemtype: 'string',
        options: {
            helperLabel: 'my pick list',
            items: [{
                value: '0',
                label: 'my',
            }, {
                value: '1',
                label: 'pick',
            }, {
                value: '2',
                label: 'list',
            }],
        },
    }];
}
