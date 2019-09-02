<template>
    <div>
        <app-quote v-for="quote in quotes" v-bind:key="quote.id">{{ quote }}</app-quote>
    </div>
</template>
<script>
import Quote from '~/components/Quote.vue';
export default {
    props: ['quotes'],
    components:{
        appQuote: Quote
    }
}
</script>
