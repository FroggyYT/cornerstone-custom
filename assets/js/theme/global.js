import 'focus-within-polyfill';

import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import privacyCookieNotification from './global/cookieNotification';
import carousel from './common/carousel';
import svgInjector from './global/svg-injector';

import themevale_AddOption from './themevale/themevale_AddOptionForProduct';


export default class Global extends PageManager {
    onReady() {
        const { cartId, secureBaseUrl } = this.context;
        cartPreview(secureBaseUrl, cartId);
        quickSearch();
        currencySelector(cartId);
        foundation($(document));
        quickView(this.context);
        carousel(this.context);
        menu();
        mobileMenuToggle();
        privacyCookieNotification();
        svgInjector();
        
        if ($('.card-variant').length) {
            $('.card-variant').each((index, element) => {
               var $prodWrapId = $(element).attr('id');
               themevale_AddOption(this.context, $prodWrapId);
             });

            //  change img when click variant
             function variantImageColor(){
                $(document).on('click', '.card .card_optionImage .form-option', function(){
                var self = $(this),
                    newImageVariant = self.data('image'),
                    productItemElm = self.closest('.card');
        
                    self.parents('.card_optionImage').find('.form-option').removeClass('active');
                    self.addClass('active');
                    
                    if (newImageVariant != "undefined") {
                        productItemElm.find('.card-img-container > img').attr({
                            "srcset": newImageVariant,
                            "src": newImageVariant
                        });
                        return false;
                    }
                });
            }
            variantImageColor();
        }
        
    }
}
