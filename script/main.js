const emailApp = new Vue ({
  el: '#emailApp',

  data: {
    // array vuoto che conterrà le 10 email:
    mails: [],
  },

  mounted: function(){

    for (i=0; i < 10; i++) {
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((result)=> {
          this.mails.push(result.data.response)
        });

    }

  }
});
