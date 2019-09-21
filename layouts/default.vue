<template>
  <v-app>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      height="100"
    >
   <v-container>
       <v-layout >
         <v-flex md1><v-app-bar-nav-icon class="mt-9" @click.stop="drawer = !drawer" /></v-flex>
         <v-flex md2> 
     <v-toolbar-title><p class="mt-10">GOD LIKE</p></v-toolbar-title>
        </v-flex>
          <v-flex md6>
          <v-layout align-center>
            <v-text-field
            label="Search"
            outlined
            single-line
            class="mt-6">
             </v-text-field>
          </v-layout>
        </v-flex>
        <v-flex md2></v-flex>
         <v-flex md1 class="mt-10 ml-12">
             <v-icon>mdi-bell</v-icon>
             <v-icon class="ml-5">mdi-dots-vertical</v-icon>
           </v-flex>
       </v-layout>
     </v-container>
     </v-app-bar>
    <v-content>
    
        <nuxt />
    
    </v-content>
   <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  }
</script>
