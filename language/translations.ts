export default function getTr (key: string) {
    let lang = interaction.locale
    if (translations.hasOwnProperty(lang)) {
        if (eval(String('translations["' + lang + '"].' + key))) {
            return eval(String('translations["' + lang + '"].' + key));
        } else {
            return eval(String('translations["en-US"].' + key));
        }
    } else {
        return eval(String('translations["en-US"].' + key));
    }
}