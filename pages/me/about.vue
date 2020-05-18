<template>
  <section class="home">
    <h1 class="home__heading">About Nuxtjs Directory Structure</h1>
    <div class="directories">
      <div
        class="directory__container"
        v-for="directory in directories"
        :key="directory.id"
        @click.prevent="storeDirectory(directory)"
      >
        <p class="directory__name">
          <nuxt-link
            :to="{ name: 'id', params: { id: directory.id, dir: directory } }"
            >{{ directory.name }}</nuxt-link
          >
        </p>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "about-nuxt",
  data() {
    return {
      directories: [
        {
          id: 0,
          name: "The Assets Directory",
          info:
            "By default, Nuxt uses vue-loader, file-loader and url-loader webpack loaders for strong assets serving. You can also use the static directory for static assets. This folder is for un-compiled files such as images, font files, SASS, LESS or JavaScript files"
        },
        {
          id: 1,
          name: "The Components Directory",
          info:
            "The components directory contains your Vue.js Components. You can’t use asyncData in these components."
        },
        {
          id: 2,
          name: "The Layouts Directory",
          info:
            "The layouts directory includes your application layouts. Layouts are used to change the look and feel of your page (for example by including a sidebar). Layouts are a great help when you want to change the look and feel of your Nuxt.js app. Whether you want to include a sidebar or having distinct layouts for mobile and desktop"
        },
        {
          id: 3,
          name: "The Middleware Directory",
          info:
            "The middleware directory contains your Application Middleware. Middleware lets you define custom functions that can be run before rendering either a page or a group of pages (layouts)."
        },
        {
          id: 4,
          name: "The Pages Directory",
          info:
            "The pages directory contains your Application Views and Routes. The framework reads all the .vue files inside this directory and creates the application router. Every Page component is a Vue component but Nuxt.js adds special attributes and functions to make the development of your universal application as easy as possible"
        },
        {
          id: 5,
          name: "The Plugins Directory",
          info:
            "The plugins directory contains your Javascript plugins that you want to run before instantiating the root Vue.js Application. This is the place to register components globally and to inject functions or constants. Nuxt.js allows you to define JavaScript plugins to be run before instantiating the root Vue.js Application. This is especially helpful when using your own libraries or external modules."
        },
        {
          id: 6,
          name: "The Static Directory",
          info:
            "The static directory is directly mapped to the server root (/static/robots.txt is accessible under http://localhost:3000/robots.txt) and contains files that likely won’t be changed (e.g. the favicon). If you don’t want to use Webpack assets from the assets directory, you can create and use the static directory (in your project root folder)."
        },
        {
          id: 7,
          name: "The Store Directory",
          info:
            "The store directory contains your Vuex Store files. The Vuex Store comes with Nuxt.js out of the box but is disabled by default. Creating an index.js file in this directory enables the store. Using a store to manage the state is important for every big application. That’s why Nuxt.js implements Vuex in its core."
        }
      ]
    };
  },
  methods: {
    storeDirectory(dir) {
      this.$store.commit("setDirectory", {
        directory: dir
      });
    }
  }
};
</script>
<style scoped>
.directories {
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 8px;
}

.directory__container {
  width: 100%;
  max-width: 220px;
  display: flex;
  align-content: center;
  justify-content: center;
  border: 2px solid #a8ebd8;
  border-radius: 4px;
  margin: 8px 6px;
  cursor: pointer;
  padding-right: 4px;
  padding-left: 4px;
}
@media (min-width: 768px) {
  .directories {
    justify-content: space-between;
  }
}
.directory__name > a {
  text-align: center;
  color: #000;
  text-decoration: none;
}

.home__heading {
  text-align: center;
}
</style>
