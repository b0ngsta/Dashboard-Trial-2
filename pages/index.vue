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
            <v-list-item-title v-text="item.title">
            </v-list-item-title>
         </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider />
        
      
     <v-col> <p class="mt-6 ml-6 font-weight-black">God Like<span class="ml-1 font-weight-black">&copy;</span></p>
     <p>
       <span class=" ml-6 primary--text font-weight-black">Privacy</span> <span class="font-weight-black" >&</span> <span class="primary--text font-weight-black">Terms</span></p></v-col>
         </v-card>
         </v-hover>
        </v-flex>
        <v-flex md></v-flex>
        <v-flex md6>
           <v-layout column>
             <v-flex md4>
                <v-layout>
                  <v-flex md4 class="mt-4">
                    <v-hover v-slot:default="{ hover }">
                      <v-card
                      :elevation="hover ? 12 : 2"
                        max-width="1200"
                        class="mx-auto" >
                        <v-img src="https://www.drupal.org/files/nodes-per-month.png" >
                           <v-layout row>
                             <v-flex md6> <v-card-title><p class="ml-4">Sales</p></v-card-title></v-flex>
                           <v-flex md6><v-chip
                              class="ma-4"
                              color="primary"
                            >
                              Gross
                            </v-chip></v-flex>

                          </v-layout>
                        
                         
                         <v-card-text><p class="display-2">$48,196</p> <p>This week</p></v-card-text>
                         <v-card-actions>
                           
                          </v-card-actions>
                             </v-img>
       
                         
                        </v-card>
                    </v-hover>
                  </v-flex>
                   <v-flex md4 class="ma-4">
                     <v-hover v-slot:default="{ hover }">
                      <v-card
                      :elevation="hover ? 12 : 2"
                        max-width="1200"
                        class="mx-auto" >
                        <v-img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzPMDVYGPxrM1s-BZJZQ4z4DYHzVLv4mrzyDLuzgw8ulQmd3ty" >
                           <v-layout row>
                             <v-flex md6> <v-card-title><p class="ml-4">Views</p></v-card-title></v-flex>
                           <v-flex md6><v-icon class="mt-8 ml-12">mdi-dots-vertical</v-icon></v-flex>

                          </v-layout>
                        <v-card-text><p class="display-2">38,196</p> <p>This week</p></v-card-text>
                         <v-card-actions>
                           
                          </v-card-actions>
                             </v-img>
                        </v-card>
                        </v-hover>
                  </v-flex>
                   <v-flex md4 class="mt-4">
                     <v-hover v-slot:default="{ hover }">
                      <v-card
                      :elevation="hover ? 12 : 2"
                        max-width="1200"
                        class="mx-auto" >
                        <v-img  src="https://i.stack.imgur.com/lm7Ou.png" >
                           <v-layout row>
                             <v-flex md6> <v-card-title><p class="ml-4">Reports</p></v-card-title></v-flex>
                           <v-flex md6><v-icon class="mt-8 ml-12">mdi-alien</v-icon></v-flex>
                         </v-layout>
                         <v-card-text><p class="display-2">23,196</p> <p>Last week</p></v-card-text>
                         <v-card-actions>
                           </v-card-actions>
                             </v-img>
                        </v-card>
                     </v-hover>
                  </v-flex>
                </v-layout>
              </v-flex>
             <v-flex md8>
               
              <v-simple-table>
    <thead>
      <tr>
        <th class="text-left font-weight-black">ID</th>
        <th class="text-left font-weight-black">Company</th>
        <th class="text-left font-weight-black">Payment Type</th>
        <th class="text-left font-weight-black">Date</th>
        <th class="text-left font-weight-black">Total</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in desserts" :key="item.name">
        <td class="font-weight-medium">{{ item.ID}}</td>
        <td class="font-weight-medium">{{ item.name }}</td>
        <td class="font-weight-medium">{{ item.name }}</td>
        <td class="font-weight-medium">{{ item.calories }}</td>
        <td class="font-weight-medium">{{ item.IDo}}</td>
      </tr>
    </tbody>
  </v-simple-table>
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
     desserts: [
          { ID: 151,
            name: 'Frozen Yogurt',
            calories: '15/5/12',
            IDo: '$7821'
           
          },
          { 
            ID: 151,
            name: 'Ice cream sandwich',
            calories: '23/4/19',
            IDo: '$7845'
          },
          { 
            ID: 151,
            name: 'Eclair',
            calories: '22/4/19',
            IDo: '$7547'
          },
          {
            ID: 151,
            name: 'Cupcake',
            calories: '30/4/19',
            IDo: '$7854'
          },
          {
            ID: 151,
            name: 'Gingerbread',
            calories: "30/4/19",
            IDo: '$45457'
          },
          {
            ID: 151,
            name: 'Jelly bean',
            calories: '05/4/19',
            IDo: '$4547'
          },
          {
            ID: 151,
            name: 'Lollipop',
            calories: '02/4/19',
            IDo: '$7457'
          },
          {
            ID: 151,
            name: 'Honeycomb',
            calories: '08/4/19',
            IDo: '$75487'
          },
          {
            ID: 151,
            name: 'Donut',
            calories: '02/4/19',
            IDo: '$454787'
          },
          {
            ID: 151,
            name: 'KitKat',
            calories: '18/4/19',
            IDo: '$42787'
          },
        ],
     
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
        },
        
        
      ],
      
      
    }
  }
}
</script>