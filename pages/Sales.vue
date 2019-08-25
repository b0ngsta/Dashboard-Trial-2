<template>
  <v-app>
     <v-layout row>
         <v-flex md2>
      <div>
        <v-layout>
          <v-img src="https://alchemy-research.com/wp-content/uploads/2015/08/Background-Design-Theme-Light-Gray.jpg" height="170">
          <v-avatar size="99" class="ma-3">
                 <img
                  src="~assets/aa.jpg"
                  alt="John"
                  >
          </v-avatar>
            <p class="ma-3">Susas U.</p>
         </v-img>
       </v-layout>
    
         </div>
         <v-card class="mx-auto"
    max-width="600"
    height="670"
    tile>
      <v-list>
        <v-list-item
          v-for="(items, i) in itemss"
          :key="i"
          :to="items.to"
          router
          exact>
        <v-list-item-action>
            <v-icon>{{ items.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="items.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
     <v-col>
        <p class="mt-6 ml-6 font-weight-black">Unikwan<span class="ml-1 font-weight-black">&copy;</span></p>
     <p>
       <span class=" ml-6 primary--text font-weight-black">Privacy</span> <span class="font-weight-black" >&</span> <span class="primary--text font-weight-black">Terms</span></p></v-col>
         </v-card>
         </v-flex>
         <v-flex md></v-flex>
        <v-flex md6>
            
           <v-layout column>
             <v-flex md6>
                <v-card>
                  <v-img height="400" src="https://media.istockphoto.com/videos/backgrounds-loopable-video-id500086382?s=640x640">
                      
                <v-row>
                 <v-col>
                   <v-row class="ma-8">
                   <v-icon>mdi-account-plus</v-icon>
                   <p class="ml-10 mt-2 font-weight-black">358 <br>NEW USERS</p>
                 </v-row>
                 <v-divider></v-divider>
                 <v-row class="ma-8">
                   <v-icon>mdi-poll</v-icon>
                   <p class="ml-10 mt-2 font-weight-black">1,111,232$ <br>
                   SALES REVENUE</p>
                 </v-row>
                 <v-divider></v-divider>
                 <v-row class="ma-8">
                   <v-icon>mdi-poll</v-icon>
                   <p class="ml-10 mt-2 font-weight-black"> 911,232$ <br>
                   PROFIT</p>
                 </v-row>
                 </v-col>
                  <v-img src="https://cdn4.iconfinder.com/data/icons/business-365/250/11-512.png" width='100' height="400">
                  <p class="ml-12 mt-4 font-weight-black">122,333$ <br>ABOVE TARGET SALES</p>
                  </v-img>
                </v-row>
                  </v-img>
               </v-card>

              </v-flex>
             <v-flex md6>
              <v-treeview
                hoverable
                :items="items"
              ></v-treeview>
             </v-flex>
           </v-layout>
        </v-flex>
        <v-flex md></v-flex>
        <v-flex md2>
          <div>
             <v-container class="grey lighten-4">
               <v-layout>
                 <v-col>
                   <p class="font-weight-black">
                   New Message
                 </p>
                     <v-row
              align="center"
              class="spacer ma-5"
              no-gutters>
              <v-avatar>
                           <img
                             src="http://aux.iconspalace.com/uploads/117428211619219278.png"
                             alt="John"
                           >
                         </v-avatar>
                            
                              <p class="ml-5 mt-2 font-weight-regular">Von dan
                              <br/>
                               3 hours ago</p>
                             </v-row>
              <v-row
              align="center"
              class="spacer ma-5"
              no-gutters>
              <v-avatar>
                  <img
                  src="https://www.pngkey.com/png/detail/314-3148038_cartoon-faces-anime-naruto-kakashi-naruto-shippuden-hatake.png"
                             alt="John"
                           >
                         </v-avatar>
                            <p class="ml-5 mt-2 font-weight-regular">Micky
                              <br/>
                               2 hours ago</p>
              </v-row>
              <v-row
              align="center"
              class="spacer ma-5"
              no-gutters>
                <v-avatar>
                    <img
                     src="http://img06.deviantart.net/419b/i/2013/255/e/a/ahri_chibi_by_k_waii-d6m0jrr.png"
                      alt="John"
                    >
                 </v-avatar>
                   <p class="ml-5 mt-2 font-weight-regular">Loren
                      <br/>
                       3 hours ago</p>
              </v-row>
              <p class="font-weight-black">EVENTS</p>
              <p class="font-weight-medium">Team Scrum</p>
              <v-divider></v-divider>
              <p class="font-weight-medium">Google I/O</p>
              <v-divider></v-divider>
              <p class="font-weight-light">No more events scheduled</p>
              <v-divider></v-divider>
              <p class="mt-5">Stats</p>
              <v-img src="https://www.pngkey.com/png/detail/243-2438293_stats-chart-outdoor-setting-top-view.png">

              </v-img>
                 </v-col>
                 
            
                 
               </v-layout>
              </v-container>
         </div>
        </v-flex>
       </v-layout>
      </v-app>
</template>

<script>
export default {
  data () {
    return {
      
      drawer: true,
      items: [
        {
          id: 1,
          name: 'Applications :',
          children: [
            { id: 2, name: 'Calendar : app' },
            { id: 3, name: 'Chrome : app' },
            { id: 4, name: 'Webstorm : app' },
          ],
        },
        {
          id: 5,
          name: 'Documents :',
          children: [
            {
              id: 6,
              name: 'vuetify :',
              children: [
                {
                  id: 7,
                  name: 'src :',
                  children: [
                    { id: 8, name: 'index : ts' },
                    { id: 9, name: 'bootstrap : ts' },
                  ],
                },
              ],
            },
            {
              id: 10,
              name: 'material2 :',
              children: [
                {
                  id: 11,
                  name: 'src :',
                  children: [
                    { id: 12, name: 'v-btn : ts' },
                    { id: 13, name: 'v-card : ts' },
                    { id: 14, name: 'v-window : ts' },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 15,
          name: 'Downloads :',
          children: [
            { id: 16, name: 'October : pdf' },
            { id: 17, name: 'November : pdf' },
            { id: 18, name: 'Tutorial : html' },
          ],
        },
        {
          id: 19,
          name: 'Videos :',
          children: [
            {
              id: 20,
              name: 'Tutorials :',
              children: [
                { id: 21, name: 'Basic layouts : mp4' },
                { id: 22, name: 'Advanced techniques : mp4' },
                { id: 23, name: 'All about app : dir' },
              ],
            },
            { id: 24, name: 'Intro : mov' },
            { id: 25, name: 'Conference introduction : avi' },
          ],
        },
      ],
     
   itemss: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Projects',
          to: '/Projects'
        },
        {
          icon: 'mdi-watch',
          title: 'Leaderboard',
          to: '/Leaderboard'
        },
        {
          icon: 'mdi-mouse ',
          title: 'Sales',
          to: '/Sales'
        },
        {
          icon: 'mdi-pin',
          title: 'Reports',
          to: '/Reports'
        },
        {
          icon: 'mdi-folder',
          title: 'Statements',
          to: '/Statements'
        },
        {
          icon: 'mdi-archive',
          title: 'Analytics',
          to: '/Analytics'
        },
        {
          icon: 'mdi-anchor',
          title: 'Expenses',
          to: '/Expenses'
        },
        {
          icon: 'mdi-xbox-controller',
          title: 'User',
          to: '/user'
        }
      ],
      
      
    }
  }
}
</script>
<style scoped>
 
</style>
