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
          exact>
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
       <span class="ml-6 primary--text font-weight-black">Privacy</span> <span class="font-weight-black" >&</span> <span class="primary--text font-weight-black">Terms</span></p></v-col>
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
    class="mx-auto"
    color="#26c6da"
    dark
    max-width="300"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-twitter
      </v-icon>
      <span class="title font-weight-light">Twitter</span>
    </v-card-title>

    <v-card-text class=" font-weight-bold">
      "Lorem ipsum dolor sit amet,  equidem est. Sed in error hendrerit, in consul constituam cum."
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk5K6kZXEld5CNdzSgXhUEOGvXQ_eJKu4ya7yqp50CEK3W1p_s"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Goku</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">680</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
                    </v-hover>
                  </v-flex>
                   <v-flex md4 class="ma-4">
                     <v-hover v-slot:default="{ hover }">
                      <v-card
                      :elevation="hover ? 12 : 2"
    class="mx-auto"
    color="#26c6da"
    dark
    max-width="300"
  >
    <v-card-title>
      <v-icon
        large
        left
      >
        mdi-twitter
      </v-icon>
      <span class="title font-weight-light">Twitter</span>
    </v-card-title>

    <v-card-text class=" font-weight-bold">
      "Lorem ipsum dolor sit amet,  equidem est. Sed in error hendrerit, in consul constituam cum."
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7udhfw3_ay6o05IPEzumzjPoqArkhUz66ouKtVZXYolnFQhWU"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Vegito</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">526</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">24</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
                     </v-hover>
                  </v-flex>
                   <v-flex md4 class="mt-4">
                     <v-hover v-slot:default="{ hover }">
                      <v-card
                      :elevation="hover ? 12 : 2"
                     class="mx-auto"
                     color="#26c6da"
                     dark
                     max-width="300"
    
                >
                  <v-card-title>
                    <v-icon
                      large
                      left
                    >
                      mdi-twitter
                    </v-icon>
                    <span class="title font-weight-light">Twitter</span>
                  </v-card-title>
              
                  <v-card-text class=" font-weight-bold">
                    "Lorem ipsum dolor sit amet,  equidem est. Sed in error hendrerit, in consul constituam cum."
                  </v-card-text>
    
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
           src="http://avante.biz/wp-content/uploads/Dragon-ball-fighterz-2018-hd-wallpaper/Dragon-ball-fighterz-2018-hd-wallpaper77.jpg"
            ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>SSJ3</v-list-item-title>
        </v-list-item-content>
       <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">65</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
                     </v-hover>
                  </v-flex>
                </v-layout>


             </v-flex>
             <v-flex md8>
              <v-container fluid>
    <v-row justify="center">
      <v-subheader>Today</v-subheader>

      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(message, i) in messages"
          :key="i"
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row
              align="center"
              class="spacer"
              no-gutters
            >
              <v-col
                cols="4"
                sm="2"
                md="1"
              >
                <v-avatar
                  size="36px"
                >
                  <img
                    v-if="message.avatar"
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                  <v-icon
                    v-else
                    :color="message.color"
                    v-text="message.icon"
                  ></v-icon>
                </v-avatar>
              </v-col>

              <v-col
                class="hidden-xs-only"
                sm="5"
                md="3"
              >
                <strong v-html="message.name"></strong>
                <span
                  v-if="message.total"
                  class="grey--text"
                >
                  &nbsp;({{ message.total }})
                </span>
              </v-col>

              <v-col
                class="text-no-wrap"
                cols="5"
                sm="3"
              >
                <v-chip
                  v-if="message.new"
                  :color="`${message.color} lighten-4`"
                  class="ml-0"
                  label
                  small
                >
                  {{ message.new }} new
                </v-chip>
                <strong v-html="message.title"></strong>
              </v-col>

              <v-col
                v-if="message.excerpt"
                class="grey--text text-truncate hidden-sm-and-down"
              >
                &mdash;
                {{ message.excerpt }}
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text v-text="lorem"></v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
  <v-container fluid>
    <v-row justify="center">
      <v-subheader>Last week</v-subheader>

      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="(toro, i) in toros"
          :key="i"
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row
              align="center"
              class="spacer"
              no-gutters
            >
              <v-col
                cols="4"
                sm="2"
                md="1"
              >
                <v-avatar
                  size="36px"
                >
                  <img
                    v-if="toro.avatar"
                    alt="Avatar"
                    src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                  >
                  <v-icon
                    v-else
                    :color="toro.color"
                    v-text="toro.icon"
                  ></v-icon>
                </v-avatar>
              </v-col>

              <v-col
                class="hidden-xs-only"
                sm="5"
                md="3"
              >
                <strong v-html="toro.name"></strong>
                <span
                  v-if="toro.total"
                  class="grey--text"
                >
                  &nbsp;({{ toro.total }})
                </span>
              </v-col>

              <v-col
                class="text-no-wrap"
                cols="5"
                sm="3"
              >
                <v-chip
                  v-if="toro.new"
                  :color="`${toro.color} lighten-4`"
                  class="ml-0"
                  label
                  small
                >
                  {{ toro.new }} new
                </v-chip>
                <strong v-html="toro.title"></strong>
              </v-col>

              <v-col
                v-if="toro.excerpt"
                class="grey--text text-truncate hidden-sm-and-down"
              >
                &mdash;
                {{ toro.excerpt }}
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text v-text="lore"></v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
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
      messages: [
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Nitesh',
          title: 'Employee of the year',
          excerpt: 'Awarded twice before',
        },
        {
          color: 'red',
          icon: 'mdi-twitter',
          name: 'Social',
          new: 5,
          total: 3,
          title: 'Twitter',
        },
        {
          color: 'teal',
          icon: 'mdi-camera-iris',
          name: 'Promos',
          new: 6,
          total: 4,
          title: 'Shop your way',
          exceprt: 'New deals available, Join Today',
        },
      ],
      lorem: 'Lorem ipsum dolor sit amet,  equidem est. Sed in error hendrerit, in consul constituam cum.',
    toros: [
        {
          avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
          name: 'Poonia ji',
          title: 'Finisher',
          excerpt: 'Much Deserving',
        },
        {
          color: 'red',
          icon: 'mdi-twitter',
          name: 'Social',
          new: 8,
          total: 3,
          title: 'Twitter',
        },
        {
          color: 'teal',
          icon: 'mdi-camera-iris',
          name: 'Promos',
          new: 2,
          total: 4,
          title: 'Shop your way',
          exceprt: 'New deals available, Join Today',
        },
      ],
      lore: 'Lorem ipsum dolor sit amet,  equidem est. Sed in error hendrerit, in consul constituam cum.',
    
     
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
