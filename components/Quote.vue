<template>
  <v-container>
     <v-layout >
      <v-flex >
        <v-card>
          <v-card-title primary-title>
            <div>
              <div> 
                  <slot></slot> 
              </div>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
