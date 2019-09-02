<template>
  
  <v-app>
     <v-layout row>
         <v-flex md2>
      <div>
        <v-layout>
          <v-img src="https://images-na.ssl-images-amazon.com/images/I/81mmkDRHNSL._SX425_.jpg" height="170">
          <v-avatar size="99" class="ma-3">
                 <img
                  src="~assets/aa.jpg"
                  alt="John"
                  >
          </v-avatar>
            <p class="ml-5 font-weight-black">Nitesh poonia</p>
         </v-img>
       </v-layout>
    
         </div>
         <v-hover v-slot:default="{ hover }">
         <v-card class="mx-auto"
           :elevation="hover ? 12 : 2"       
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
         </v-hover>
         </v-flex>
         <v-flex md></v-flex>
        <v-flex md6>
          <p class="amber--text font-weight-medium ma-4">
            Report Overview
            <br>
            Last month with data(December)
          </p>
          <v-layout column>
            <v-flex md6>
              
                 <v-row>
                   <v-col>
                <v-hover v-slot:default="{ hover }">
                <v-card class="ma-2" height="100" :elevation="hover ? 12 : 2">
                  <v-row>
                    <v-col>
                      <p class="grey--text mt-4 ml-6">Visitors</p>
                      <p class="font-weight-black headline mt-4 ml-6">5165</p>
                    </v-col>
                    <v-row>
                      <v-icon class="mt-2  ml-3">mdi-arrow-up</v-icon>
                      <p class="mt-12 ml-3 body-2 light-green--text">27.5% <br>vs last month</p>
                    </v-row>
                  </v-row>
                </v-card>
                </v-hover>
                <v-hover v-slot:default="{ hover }">
                <v-card class="ma-2" height="100" :elevation="hover ? 12 : 2">
                  <v-row>
                    <v-col>
                      <p class="grey--text mt-4 ml-6">Visitors</p>
                      <p class="font-weight-black headline mt-4 ml-6">516</p>
                    </v-col>
                    <v-row>
                      <v-icon class="mt-2  ml-3">mdi-arrow-down</v-icon>
                      <p class="mt-12 ml-3 body-2 red--text">13.3% <br>vs last month</p>
                    </v-row>
                  </v-row>
                </v-card>
                </v-hover>
                <v-hover v-slot:default="{ hover }">
                <v-card class="ma-2" height="100" :elevation="hover ? 12 : 2">
                  <v-row>
                    <v-col>
                      <p class="grey--text mt-4 ml-6">Visitors</p>
                      <p class="font-weight-black headline mt-4 ml-6">58</p>
                    </v-col>
                    <v-row>
                      <v-icon class="mt-2  ml-3">mdi-arrow-up</v-icon>
                      <p class="mt-12 ml-3 body-2 light-green--text">7.5% <br>vs last month</p>
                    </v-row>
                  </v-row>
                </v-card>
                </v-hover>
              </v-col>
              <v-hover v-slot:default="{ hover }">
              <v-card height="320" class="mt-4" :elevation="hover ? 12 : 2">
                  <v-img width="600" height="320" src="https://lh5.googleusercontent.com/gj_BGhmCpFlvlhUg67gl0i607uCUyQ8NyvoPwxYy96R2TIVD6n88ti2hrz5NrdEphAVSJ9ocN_r_Kxd9jwGl1ryyHd_nxV-8vUX0K5BRDcrlv1pqK-VstIMYHy_xxVaXQgK4fiI"></v-img>
              </v-card>
              </v-hover>
             </v-row>
            </v-flex>
            <v-flex md6>
              <v-row>
                   <v-col>
                <v-hover v-slot:default="{ hover }">
                <v-card class="ma-2" height="100" :elevation="hover ? 12 : 2">
                  <v-row>
                    <v-col>
                      <p class="grey--text mt-4 ml-6">Signup rate</p>
                      <p class="font-weight-black headline mt-4 ml-6">30%</p>
                    </v-col>
                    <v-row>
                      <v-icon class="mt-2  ml-3">mdi-arrow-down</v-icon>
                      <p class="mt-12 ml-3 body-2 red--text">7.5% <br>vs last month</p>
                    </v-row>
                  </v-row>
                </v-card>
                </v-hover>
               <v-hover v-slot:default="{ hover }">
                <v-card class="ma-2" height="100" :elevation="hover ? 12 : 2">
                  <v-row>
                    <v-col>
                      <p class="grey--text mt-4 ml-6">Paying rate</p>
                      <p class="font-weight-black headline mt-4 ml-6">526</p>
                    </v-col>
                    <v-row>
                      <v-icon class="mt-2  ml-3">mdi-arrow-up</v-icon>
                      <p class="mt-12 ml-3 body-2 light-green--text">33.3% <br>vs last month</p>
                    </v-row>
                  </v-row>
                </v-card>
               </v-hover>
                <v-hover v-slot:default="{ hover }">
                <v-card class="ma-2" height="100" :elevation="hover ? 12 : 2">
                  <v-row>
                    <v-col>
                      <p class="grey--text mt-4 ml-6">Churn rate</p>
                      <p class="font-weight-black headline mt-4 ml-6">88</p>
                    </v-col>
                    <v-row>
                      <v-icon class="mt-2  ml-3">mdi-arrow-up</v-icon>
                      <p class="mt-12 ml-3 body-2 light-green--text">17.5% <br>vs last month</p>
                    </v-row>
                  </v-row>
                </v-card>
                </v-hover>
              </v-col>
              <v-hover v-slot:default="{ hover }">
              <v-card height="320" class="mt-4" :elevation="hover ? 12 : 2">
                  <v-img width="600" height="320" src="http://www.webdesigndev.com/wp-content/uploads/2017/07/graph.jpg"></v-img>
              </v-card>
              </v-hover>
             </v-row>
               
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
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'mdi-account',
          title: 'Users',
          to: '/user'
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
          icon: 'mdi-archive',
          title: 'Analytics',
          to: '/Analytics'
        }
      ],
      
      
    }
  }
}
</script>
