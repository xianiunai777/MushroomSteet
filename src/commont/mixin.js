import BackTop from '../components/content/backtop/backtop'
export let backTopMixin = {
  data() {
    return { isShow: null }
  },
  methods: {
    backTop() {
      this.$refs.scroll.bs.scrollTo(0, 0, 3000)
    },
    backTopShow(y) {
      this.isShow = y
    }
  },
  components: {
    BackTop
  }
}