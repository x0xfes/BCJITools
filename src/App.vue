<template>
  <v-app>
    <v-main>
      <v-container>
        <v-row justify="center">
          <v-col class="text-center" cols="8">
            <h1 class="display-2 font-weight-bold">BCJI Tools</h1>
            <p class="subheading">
              <a href="https://syosetu.org/novel/217501/">美少女になってちやほやされて人生イージーモードで生きたい！</a>で使われている特殊タグをいい感じに生成するやつです。
            </p>
            <CreateChat />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <v-footer>
      <v-col class="text-center">
        &copy; 2021 <a href="http://twitter.com/x0xfes">x0xfes</a>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import CreateChat from './components/CreateChat';

export default {
  name: 'App',

  components: {
    CreateChat
  }
};
</script>
