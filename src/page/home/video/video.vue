<template>
  <div class="wrapper video">
    <Header :title="'video'" />
    <p>请选择或者拍摄视频上传</p>
    
    <videoPlayer 
      class="vjs-custom-skin"
      :options="playerOptions"
      :playsinline="true"
      @ready="playerReadied($event)">
    </videoPlayer>
    <div class="uplaod-video">
      <input class="upload" type="file" 
        accept="video/avi,video/mp4,video/flv,video/3gp,video/swf" 
        capture="camcorder" 
        @change="onFileChange" >
    </div>
    <btn :text="'确认上传'">
      
    </btn>
  </div>
</template>
<script>
import Header from '@/commond/header.vue'
import Btn from '@/components/button.vue'
import 'video.js/dist/video-js.css'
import videojs from 'video.js'

import { videoPlayer } from 'vue-video-player'
export default {
  data(){
    return {
      playerOptions: {
        height: '240',
        width: '280',
        playbackRates: [0.7, 1, 1.3, 1.5, 1.7],
        sources: [{
          type: "video/mp4",
          src: "http://7xkwa7.media1.z0.glb.clouddn.com/sample_video_L"
        }],
        // poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-3.jpg",
      }
    }
  },
  components: {
    Header,
    Btn,
    videoPlayer
  },
  methods: {
    playerReadied(player) {
      const track = new videojs.AudioTrack({
        id: 'my-spanish-audio-track',
        kind: 'translation',
        label: 'Spanish',
        language: 'es'
      })
      player.audioTracks().addTrack(track)
      // Get the current player's AudioTrackList object.
      const audioTrackList = player.audioTracks()
      // Listen to the "change" event.
      audioTrackList.addEventListener('change', function() {
        // Log the currently enabled AudioTrack label.
        for (let i = 0; i < audioTrackList.length; i++) {
          const track = audioTrackList[i]
          if (track.enabled) {
            videojs.log(track.label)
            return
          }
        }
      })
    },
    async onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      if(!files[0].type === 'video/mp4') {
        alert('视频格式必须是mp4格式')
        return
      } 
      //video size
      // console.log(files)
      if(files[0].size > 10*1024*1024) {
        alert('视频大小必须小于10M')
        return
      }
      //视频上传
      let _this = this;

      //视频预览
      var reader = new FileReader();
      this.file = files[0];
      reader.onload = function () {
        _this.playerOptions.sources[0].src = this.result
        // _this.$set(_this.playerOptions.sources[0],'src' ,this.result)
        // console.log(_this.playerOptions.sources[0].src)
      };
      
      await reader.readAsDataURL(this.file)
      
    },
  },
  mounted(){
    // console.log('this is current player instance object', this.player)
  },
  computed: {
    // player() {
    //   return this.$refs.videoPlayer.player
    // }
  },
}
</script>
<style lang="sass" scoped>
@import '~@/assets/css/mixin'
.vjs-custom-skin
  height: 250x
  width: 300px
  margin: 0 auto
.upload
  font-size: .4rem
  overflow: visible
</style>
<style lang="sass">
#vjs_video_3
  height: 250px
  width: 300px
//全屏样式
.video-js .vjs-tech
  position: relative
  // height: 500px
  // width: 600px
  background-size: 100% 100%
.vjs-button > .vjs-icon-placeholder:before
  font-size: 3em
  // line-height: 3em
  position: relative
  text-align: center
  margin: 0
  padding: 0
  height: 100%
  line-height: none
.video-js .vjs-control-text
  height: 4px;/*no*/
  width: 4px;/*no*/
.vjs-playback-rate .vjs-playback-rate-value
  // font-size: 2.5em
  // line-height: 3em
  position: relative
  text-align: center
  margin: 0
  padding: 0
  height: 100%
  line-height: none
.video-js .vjs-progress-control .vjs-progress-holder
  // margin: 2px 0;/*no*/
  // height: 4em
.video-js .vjs-mute-control
  padding: 0
// 小的样式
.vjs_video_604-dimensions
  height: 250px
  width: 300px
</style>



