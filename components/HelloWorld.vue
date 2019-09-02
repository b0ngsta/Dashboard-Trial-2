<template>
    <div> 
         <v-expansion-panels>
    <v-expansion-panel
      v-for="quote in quotes" :key="quote.name"
      
    >
      <v-expansion-panel-header>{{ quote.name }}</v-expansion-panel-header>
      <v-expansion-panel-content>
         <v-card>
                     <v-card-text class="px-4 grey--text ">
                       
                       <p><span class="font-weight-black title"> Project's ID:</span>
                       <span> {{ quote.id }}</span> </p>
                       <p><span class="font-weight-black title"> Projects's Status:</span>
                       <span>  {{ quote.status }}</span> </p>
                      <p><span class="font-weight-black title">Projects's details:</span>
                       <span>  {{ quote.details }}</span> </p>
                     
                       
                     </v-card-text>
                   </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
        <div>
            <v-layout>
                <v-flex md5></v-flex>
                <v-flex md2> 
                   <v-dialog>
                     
                   <v-card>
                    <v-card-title
                      class="headline grey lighten-2"
                      primary-title
                    >
                      Add Project Info
                    </v-card-title>

                 <v-card-text>
                  <v-form class="pa-2">
                    <v-text-field label="Title" v-model="name"></v-text-field>
                    <v-text-field label="Project Status" v-model="status"></v-text-field>
                    <v-text-field label="Project Details" v-model="details"></v-text-field>
                  </v-form>
                 </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
             @click="addNew"
          >
            Add 
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>            

                </v-flex>
                <v-flex md5></v-flex>
            </v-layout>
           
        </div>
      
    </div>
</template>

<script>
export default {
    data: function(){
        return{
            quote: '',
            
        }
    },
  
  methods: {
    addNew(){
            this.$emit('addEd',this.quote);
            this.quote='';
            
  }
}

}












    


</script>

<style>

</style>
