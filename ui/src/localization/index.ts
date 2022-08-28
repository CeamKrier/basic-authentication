import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        },
        resources: {
            en: {
                translation: {
                    keyLogout: "Logout",
                    keyCurrentLocale: "Current Locale",
                    keyPassword: "Password",
                    keyPickLanguage: "Pick Language",
                    keyEmail: "E-Mail",
                    keyAccount: "Account",
                    keySubmit: "Submit",
                    keyCartDetails: "Cart Details",
                    keyCartTotal: "Total",
                    keyTaxShipment: "Tax + Shipment",
                    keyGrandTotal: "Grand Total",
                    keyAddToCart: "Add to cart",
                    keyNavList: "List",
                    keyNavAccount: "Account"
                }
            },
            tr: {
                translation: {
                    keyLogout: "Çıkış",
                    keyCurrentLocale: "Seçili Dil",
                    keyPassword: "Şifre",
                    keyPickLanguage: "Dil Seçin",
                    keyEmail: "E-Mail",
                    keyAccount: "Kullanıcı Hesabı",
                    keySubmit: "Gönder",
                    keyCartDetails: "Sepet Detayları",
                    keyCartTotal: "Toplam",
                    keyTaxShipment: "Vergi + Kargolama",
                    keyGrandTotal: "Ödenecek Tutar",
                    keyAddToCart: "Sepete ekle",
                    keyNavList: "İlanlar",
                    keyNavAccount: "Hesap"
                }
            }
        }
    });

export default i18n;
