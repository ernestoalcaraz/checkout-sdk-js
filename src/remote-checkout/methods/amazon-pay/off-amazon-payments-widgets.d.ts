declare namespace OffAmazonPayments.Widgets {
    class AddressBook {
        constructor(options: AddressBookOptions);
        bind(container: string): void;
    }

    // tslint:disable-next-line:max-classes-per-file
    class Wallet {
        constructor(options: WalletOptions);
        bind(container: string): void;
    }

    interface AddressBookOptions {
        design: {
            designMode: string;
        };
        scope: string;
        sellerId: string;
        onAddressSelect: (orderReference: OrderReference) => void;
        onError: (error: WidgetError) => void;
        onReady: (orderReference: OrderReference) => void;
        onOrderReferenceCreate: (orderReference: OrderReference) => void;
    }

    interface WalletOptions {
        design: {
            designMode: string;
        };
        scope: string;
        sellerId: string;
        onError: (error: WidgetError) => void;
        onReady: (orderReference: OrderReference) => void;
        onPaymentSelect: (orderReference: OrderReference) => void;
        amazonOrderReferenceId?: string;
        onOrderReferenceCreate?: (orderReference: OrderReference) => void;
    }

    interface OrderReference {
        getAmazonBillingAgreementId(): string;
        getAmazonOrderReferenceId(): string;
    }

    interface WidgetError extends Error {
        getErrorCode(): string;
    }
}