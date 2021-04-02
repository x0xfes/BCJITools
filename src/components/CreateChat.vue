<template>
  <v-col>
    <v-btn @click="add" class="ma-2">追加</v-btn>
    <v-btn @click="build" class="ma-2">生成</v-btn>
    
    <v-row v-for="item in chats" :key="item.index">
      <v-col cols="3" class="py-0">
        <v-text-field v-model="item.name" label="名前"></v-text-field>
      </v-col>
      <v-col cols="7" class="py-0">
        <v-text-field v-model="item.comment" label="コメント"></v-text-field>
      </v-col>
      <v-col cols="1" class="py-0"><v-select v-model="item.side" :items="side" item-text="label" item-value="value"></v-select></v-col>
      <v-col cols="1" class="py-0" align-self="center">
        <v-btn @click="del(item.index)" icon><v-icon>mdi-minus</v-icon></v-btn>
      </v-col>
    </v-row>

    <v-snackbar v-model="snackbar" :timeout="2000">
      クリップボードにコピーしました
      <template v-slot:action="{ attrs }">
        <v-btn color="blue" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </v-col>
</template>

<script>
  const BG_COLOR = '#e6e6e6';
  const NAME_COLOR = '#808080';
  const COMMENT_BOX_COLOR = '#ffffff';

  const createSpace = num => `《opacity:0》${'.'.repeat(num)}《/opacity》`;
  const createName = name => `《color:${NAME_COLOR}》《xsmall》${name}《/xsmall》《/color》`;
  const createComment = comment => `《bgcolor:${COMMENT_BOX_COLOR}》${createSpace(1)}${comment}${createSpace(1)}《/bgcolor》`;

  export default {
    name: 'CreateChat',
    data() {
      return {
        count: 0,
        side: [{label: "右", value: 0}, {label: "左", value: 1}],
        chats: [this.createChatObj()],
        snackbar: false
      }
    },
    methods: {
      createChatObj() {
        return {index: this.count++, name: '', comment: '', side: 0};
      },
      add() {
        this.chats.push(this.createChatObj());
      },
      del(index) {
        const i = this.chats.findIndex(item => item.index == index);
        this.chats.splice(i, 1);
      },
      build() {
        let text = `《boxbgcolor:${BG_COLOR}》\n`;
        for (const item of this.chats) {
          if (item.side == 0) {
            text += `《sub》${createSpace(2)}${createName(item.name)}《/sub》`;
          } else {
            text += `《right》《sub》${createName(item.name)}${createSpace(2)}《/sub》《/right》`;
          }
          text += '\n';
          if (item.side == 0) {
            text += `${createSpace(1)}${createComment(item.comment)}`;
          } else {
            text += `《right》${createComment(item.comment)}${createSpace(1)}《/right》`;
          }
          text += '\n';
        }
        text += '《/boxbgcolor》';
        
        if (navigator.clipboard) {
          navigator.clipboard.writeText(text);
          this.snackbar = true;
        }
      }
    }
  }
</script>