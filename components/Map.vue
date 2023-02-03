<template>
  <div >
    <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3964.1639361703396!2d3.3743348152557475!3d6.500920425227793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s1st%20Floor%2C%20Sum%20House%2C%20350%20Borno%20Way%2C%20Alagomeji-Yaba%20101212%2C%20Lagos!5e0!3m2!1sen!2sng!4v1675430255630!5m2!1sen!2sng" 
    width="100%" height="950" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->

    <!-- <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1Lbqw8SvMxdOy7XTtaqmNaCzfX789ivc&ehbc=2E312F" width="100%"
      height="screenHeight"></iframe> -->

    <!-- Step 3 using image and link -->
  <a href="https://goo.gl/maps/UuzFGqYVyGSkc1AN8" target="_blank">
    <img src="https://res.cloudinary.com/chuksmbanaso/image/upload/v1675441223/Screenshot_2023-02-03_at_17.17.28_xabjbt.png" alt="you-verify map" class="map-image"/>
  </a>
  </div>
</template>

<script>


export default {
  name: 'Map',
  components: {},

  data() {
    return {
      screenHeight: null,
    }
  },

  mounted() {
    // console.log(this.screenHeight)
  },

  created: function () {
    if (typeof window !== 'undefined') {
      const height = window?.innerHeight 

      this.screenHeight = height
    }
  },


}
</script>