<template>
    <div class="dropdown">
        <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {{ $i18n.locale }}
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a v-for="(locale, index) in locales" :key="index" class="dropdown-item" href="#"
               @click.prevent="setLocale(locale)"
            >
                {{ locale }}
            </a>
        </div>
    </div>
</template>
    
    <script>
    export default {
        data() {
            return {
                locales: ['en', 'es'],
            }
        },
        methods: {
            setLocale(language) {
                this.$store.dispatch('changeLocale', language)
                    .then(() => {
                        this.$i18n.locale = language;
                    }).catch((error => {
                }));
            }
        }
    }
 </script>
