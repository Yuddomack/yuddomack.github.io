<template>
  <aside :class="{ active: tocActive }">
    <header class="tocHeader">
      <div class="tocTitle">
        <b>목차</b>
      </div>
      <div class="tocClose">
        <button @click.stop.prevent="deactiveToc()">x</button>
      </div>
    </header>
    <div class="wrapInput">
      <input type="text" />
    </div>
    <div class="wrapContents">
      <div class="content">· 항목1</div>
      <div class="content">· 항목2</div>
      <div class="content">· 항목3</div>
      <div class="content">ㅤ· 항목3-1</div>
      <div class="content">ㅤ· 항목3-2</div>
      <div class="content">ㅤ· 항목3-3</div>
      <div class="content">· 항목4</div>
      <div class="content">· 항목5</div>
      <div class="content">· 항목6</div>
      <div class="content">ㅤ· 항목6-1</div>
      <div class="content">ㅤㅤ· 항목6-1-1</div>
      <div class="content">ㅤㅤ· 항목6-1-2</div>
      <div class="content">ㅤ· 항목6-2</div>
      <div class="content">· 항목7</div>
      <div class="content">· 항목8</div>
      <div class="content">· 항목9</div>
    </div>
    <div class="see">
      <button @click.stop.prevent="activeToc()">toc 펼쳐보기</button>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      tocActive: false,
    };
  },
  methods: {
    activeToc() {
      this.tocActive = true;
    },
    deactiveToc() {
      this.tocActive = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
aside {
  background: white;
  /* cyan; */
  float: left;
  width: 256px;
  padding: 10px;
}

.tocHeader::after {
  content: '';
  display: block;
  clear: both;
}

.tocTitle {
  float: left;
}

.tocClose {
  display: none;
  float: right;
}

.wrapInput {
  width: 100%;
  padding-top: 10px;
}

input {
  width: 100%;
  margin: -3px;
  font-size: 20px;
  border: 0.5px solid #aaa;
}

.wrapContents {
  width: 100%;
  padding-left: 10px;
  padding-top: 10px;
  font-size: 13px;
}

.content {
  padding-top: 5px;
  padding-bottom: 5px;
}

.see {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: white;
  visibility: hidden;
}

@media (max-width: 768px) {
  aside {
    height: 100%;
    position: absolute;
    visibility: hidden;
  }

  .active {
    visibility: visible;
  }

  .tocClose {
    display: block;
  }

  .see {
    visibility: visible;
  }
}
</style>
