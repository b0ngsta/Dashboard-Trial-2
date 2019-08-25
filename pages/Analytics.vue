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
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
        
      
     <v-col> <p class="mt-6 ml-6 font-weight-black">Unikwan<span class="ml-1 font-weight-black">&copy;</span></p>
     <p>
       <span class=" ml-6 primary--text font-weight-black">Privacy</span> <span class="font-weight-black" >&</span> <span class="primary--text font-weight-black">Terms</span></p></v-col>
         </v-card>
         </v-flex>
         <v-flex md></v-flex>
        <v-flex md6>





            
























            















          <v-layout column>
             <v-flex md6>
                <v-layout>
                  <v-flex md6 class="ma-4">
                      <v-card
                 width="600">
                   <v-img src="https://www.statista.com/graphic/1/276601/number-of-world-of-warcraft-subscribers-by-quarter.jpg"></v-img>
                      <v-card-text class="font-weight-black">Real Time Subscriber Count</v-card-text>
                 </v-card>
                  </v-flex>
                   
                   <v-flex md6 class="ma-4">
                      <v-card
                 width="600"
                 height="408">
                   <v-img src="https://www.kreyonmedia.com/post/wp-content/uploads/2018/11/most-popular-youtube-channel.jpg"></v-img>
                       <v-card-text class="font-weight-black">Most Popular</v-card-text>
                 </v-card>
                  </v-flex>
                </v-layout>


             </v-flex>
             <v-flex md6>
               
                     <v-card >
                       <v-img height="400" width="800" src="https://www.v-m-d.com/wp-content/uploads/2017/03/personal-template-nice-blank-histogram-graph-central-limit-theorem-pocket-change.png">
                       <v-sparkline
                      :value="value"
                      :gradient="gradient"
                      :smooth="radius || false"
                      :padding="padding"
                      :line-width="width"
                      :stroke-linecap="lineCap"
                      :gradient-direction="gradientDirection"
                      :fill="fill"
                      :type="type"
                      :auto-line-width="autoLineWidth"
                      auto-draw
                    ></v-sparkline>
                    
                       </v-img>
                       <v-card-text><p class="headline ">Real-time customer preference graph</p></v-card-text>
                     </v-card>
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
const gradients = [
    ['#000000'],
    ['#000000'],
    ['black'],
    ['black'],
    ['#000000'],
    ['#000000'],
  ]
export default {
  data () {
    return {
       width: 1,
      radius: 10,
      padding: 8,
      lineCap: 'round',
      gradient: gradients[1],
      value: [6, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 7],
      gradientDirection: 'top',
      gradients,
      fill: false,
      type: 'trend',
      autoLineWidth: false,
      drawer: true,
     
      items: [
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
