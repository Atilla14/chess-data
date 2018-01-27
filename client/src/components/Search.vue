<template lang="pug">
.search
  h1 Search by chess.com username
  .search-form
    input#searchInput(type="text", placeholder="eg. atilla14", v-model="username").search-input
    button#submitButton.button(@click="handleSubmit") Analyze 
</template>

<script>
export default {
  name: 'Search',
  data() {
      return {
          username: ''
      }
  },
  methods: {
      handleSubmit(evt) {
          this.$store.dispatch({
              type: 'fetchUserGames',
              username: this.username
          })
      }
  }
}
</script>

<style scoped>
.search-form {
    display: flex;
    justify-content: center;
}
.search-input {
    border: 1px solid #cccccc;
    padding: .6em .5em;
    border-radius: 2px;
    border-top-right-radius: 0;
    border-top-left-radius: 0;
    border-right: 0;
    font-size: 22px;
    min-width: 300px;
}
#submitButton {
    display: block;
    font-size: 18px;
    font-family: "Montserrat", "Trebuchet MS", Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    position: relative;
    padding: .8em 1.4em;
    background: #009ED8;
    border: none;
    color: white;
    transition: .2s;
    border-radius: 2px;
}
</style>
