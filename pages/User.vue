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
         <v-card :elevation="hover ? 12 : 2" class="mx-auto"
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
      <v-divide />
     <v-col> <p class="mt-6 ml-6 font-weight-black">Unikwan<span class="ml-1 font-weight-black">&copy;</span></p>
     <p>
       <span class=" ml-6 primary--text font-weight-black">Privacy</span> <span class="font-weight-black" >&</span> <span class="primary--text font-weight-black">Terms</span></p></v-col>
         </v-card>
         </v-hover>
         </v-flex>
         <v-flex md></v-flex>
        <v-flex md6>
          <v-col>
            <v-row>
              <v-hover v-slot:default="{ hover }">
          <v-card
          :elevation="hover ? 12 : 2"
           width="400"
           class="mx-auto ma-6"
           >
            <v-list-item>
                 <v-list-item-avatar  height="150" width="150"><v-img src="https://fsb.zobj.net/crop.php?r=bU4LncsRfvD1FGI37sLVPQvl_yEwWWdtnXRDQQ8isPKjnmfRwFD2WvmqWxtKtCx-BfTBU5O7NgkWwHxnfIfQefDF_0DaHzolC3UE7Ou_kN7_jQHRtn7FsBYZNQ3asR5_xM6srBHWv1sPkcTP1LbGdCFlOqQbazXGdMINmV-dO-HLM-IZjL8U7Oh4re0" ></v-img></v-list-item-avatar>
                 <v-list-item-content>
                   <v-list-item-title class="headline">Nitesh Poonia</v-list-item-title>
                   <v-list-item-subtitle>Employee</v-list-item-subtitle>
                 </v-list-item-content>
            </v-list-item>
                    
                 <v-dialog v-model="dialog" persistent max-width="290">
                    <template v-slot:activator="{ on }">
                      <v-btn color="primary" dark v-on="on" class="mb-4 ml-8" left>More info</v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="headline">Nitesh Poonia</v-card-title>
                      <v-card-text>Lorem ipsum dolor sit amet,  equidem est. Sed in error hendrerit, in consul constituam cum.</v-card-text>
                      <v-card-actions>
                        <div class="flex-grow-1"></div>
                        
                        <v-btn color="green darken-1" text @click="dialog = false">close</v-btn>
                      </v-card-actions>
                    </v-card>
                 </v-dialog>
           
           </v-card>
              </v-hover>
              <v-hover v-slot:default="{ hover }">
           <v-card
           :elevation="hover ? 12 : 2"
           width="400"
           class="mx-auto ma-6"
           >
            <v-list-item>
                 <v-list-item-avatar  height="150" width="150"><v-img src="https://i.redd.it/d9rglynx0qk01.jpg" ></v-img></v-list-item-avatar>
                 <v-list-item-content>
                   <v-list-item-title class="headline">Lorem</v-list-item-title>
                   <v-list-item-subtitle>Employee</v-list-item-subtitle>
                 </v-list-item-content>
            </v-list-item>
                    
                 <v-dialog v-model="dialog" persistent max-width="290">
                    <template v-slot:activator="{ on }">
                      <v-btn color="primary" dark v-on="on" class="mb-4 ml-8" left>More info</v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="headline">Lorem</v-card-title>
                      <v-card-text>Lorem ipsum dolor sit amet,  equidem est. Sed in error hendrerit, in consul constituam cum.</v-card-text>
                      <v-card-actions>
                        <div class="flex-grow-1"></div>
                        
                        <v-btn color="green darken-1" text @click="dialog = false">close</v-btn>
                      </v-card-actions>
                    </v-card>
                 </v-dialog>
           
           </v-card>
              </v-hover>
              <v-hover v-slot:default="{ hover }">
              <v-card
              :elevation="hover ? 12 : 2"
           width="400"
           class="mx-auto ma-6"
           >
            <v-list-item>
                 <v-list-item-avatar  height="150" width="150"><v-img src="https://images4.alphacoders.com/476/thumb-350-47698.png" ></v-img></v-list-item-avatar>
                 <v-list-item-content>
                   <v-list-item-title class="headline">Lorem</v-list-item-title>
                   <v-list-item-subtitle>Employee</v-list-item-subtitle>
                 </v-list-item-content>
            </v-list-item>
                    
                 <v-dialog v-model="dialog" persistent max-width="290">
                    <template v-slot:activator="{ on }">
                      <v-btn color="primary" dark v-on="on" class="mb-4 ml-8" left>More info</v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="headline">Lorem</v-card-title>
                      <v-card-text>Lorem ipsum dolor sit amet,  equidem est. Sed in error hendrerit, in consul constituam cum.</v-card-text>
                      <v-card-actions>
                        <div class="flex-grow-1"></div>
                        
                        <v-btn color="green darken-1" text @click="dialog = false">close</v-btn>
                      </v-card-actions>
                    </v-card>
                 </v-dialog>
           
           </v-card>
              </v-hover>
              <v-hover v-slot:default="{ hover }">
           <v-card
           :elevation="hover ? 12 : 2"
           width="400"
           class="mx-auto ma-6"
           >
            <v-list-item>
                 <v-list-item-avatar  height="150" width="150"><v-img src="https://c4.wallpaperflare.com/wallpaper/370/127/644/uchiha-sasuke-rinnegan-eternal-mangekyou-sharingan-naruto-shippuuden-wallpaper-f50fad6f7362c5beeddf9e9c180781eb.jpg" ></v-img></v-list-item-avatar>
                 <v-list-item-content>
                   <v-list-item-title class="headline">Lorem</v-list-item-title>
                   <v-list-item-subtitle>Employee</v-list-item-subtitle>
                 </v-list-item-content>
            </v-list-item>
                    
                 <v-dialog v-model="dialog" persistent max-width="290">
                    <template v-slot:activator="{ on }">
                      <v-btn color="primary" dark v-on="on" class="mb-4 ml-8" left>More info</v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="headline">Lorem</v-card-title>
                      <v-card-text>Lorem ipsum dolor sit amet,  equidem est. Sed in error hendrerit, in consul constituam cum.</v-card-text>
                      <v-card-actions>
                        <div class="flex-grow-1"></div>
                        
                        <v-btn color="green darken-1" text @click="dialog = false">close</v-btn>
                      </v-card-actions>
                    </v-card>
                 </v-dialog>
           
           </v-card>
              </v-hover>
              <v-hover v-slot:default="{ hover }">
           <v-card
           :elevation="hover ? 12 : 2"
           width="400"
           class="mx-auto ma-6"
           >
            <v-list-item>
                 <v-list-item-avatar  height="150" width="150"><v-img src="https://i.imgur.com/jGBhmWY.jpg" ></v-img></v-list-item-avatar>
                 <v-list-item-content>
                   <v-list-item-title class="headline">Lorem</v-list-item-title>
                   <v-list-item-subtitle>Employee</v-list-item-subtitle>
                 </v-list-item-content>
            </v-list-item>
                    
                 <v-dialog v-model="dialog" persistent max-width="290">
                    <template v-slot:activator="{ on }">
                      <v-btn color="primary" dark v-on="on" class="mb-4 ml-8" left>More info</v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="headline">Lorem</v-card-title>
                      <v-card-text>Lorem ipsum dolor sit amet,  equidem est. Sed in error hendrerit, in consul constituam cum.</v-card-text>
                      <v-card-actions>
                        <div class="flex-grow-1"></div>
                        
                        <v-btn color="green darken-1" text @click="dialog = false">close</v-btn>
                      </v-card-actions>
                    </v-card>
                 </v-dialog>
           
           </v-card>
              </v-hover>
           <v-hover v-slot:default="{ hover }">
           <v-card
           :elevation="hover ? 12 : 2"
           width="400"
           class="mx-auto ma-6"
           >
            <v-list-item>
                 <v-list-item-avatar  height="150" width="150"><v-img src="https://i.pinimg.com/originals/19/18/d1/1918d1854c8c6900e0effa7d86b5a8a0.jpg" ></v-img></v-list-item-avatar>
                 <v-list-item-content>
                   <v-list-item-title class="headline">Lorem</v-list-item-title>
                   <v-list-item-subtitle>Employee</v-list-item-subtitle>
                 </v-list-item-content>
            </v-list-item>
                    
                 <v-dialog v-model="dialog" persistent max-width="290">
                    <template v-slot:activator="{ on }">
                      <v-btn color="primary" dark v-on="on" class="mb-4 ml-8" left>More info</v-btn>
                    </template>
                    <v-card>
                      <v-card-title class="headline">Lorem</v-card-title>
                      <v-card-text>Lorem ipsum dolor sit amet,  equidem est. Sed in error hendrerit, in consul constituam cum.</v-card-text>
                      <v-card-actions>
                        <div class="flex-grow-1"></div>
                        
                        <v-btn color="green darken-1" text @click="dialog = false">close</v-btn>
                      </v-card-actions>
                    </v-card>
                 </v-dialog>
           
           </v-card>
           </v-hover>
         
         
         
         
            </v-row>
          </v-col>
          
             
           





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
       dialog: false,
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
