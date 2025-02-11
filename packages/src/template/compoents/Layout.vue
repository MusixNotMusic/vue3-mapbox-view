<template>
  <div class="mp-layer-paint-layout-style" :style="customStyle">
    <div class="transition-height" :class="{open: detail}">
      <div class="mp-layer-paint-layout-content transition-height-container">
        <span class="mb-icon icon" :class="{'icon-view-min': !detail, 'icon-view-max': detail}" @click="detail = !detail"></span>
        
          <div class="brief" v-if="!detail">
            <div class="item" v-for="(value, key, index) in inputLayout.default" :key="index">
              {{ key }}:{{value.value }}
            </div>
          </div>

          <AutoHeight v-model="detail">
            <template #content>
              <div class="mp-kv-wrap" v-if="detail">
                <div class="mp-key-value" v-for="(value, key, index) in inputLayout.default" :key="index">
                  <label for="">
                      <span>{{key}}</span>
                  </label>
              
                  <template v-if="value.component">
                    <component :is="value.component" v-model="value.value" :list="value.list" @change="change(key, value)"></component>
                  </template>
                </div>
              </div>
            </template>
          </AutoHeight>
      

          <span class="tag-b-r" v-if="detail && !showMore" @click="showMore = !showMore">more</span>
          <AutoHeight v-model="showMore">
            <template #content>
              <div class="mp-layer-paint-other-content">
                <div class="split-line"><span>更多配置</span></div>
                <span class="tag-t-r" v-if="showMore" @click="showMore = !showMore">more</span>
                <div class="mp-key-value" v-for="(value, key, index) in inputLayout.other" :key="index">
                  <label>
                      <span>{{key}}</span>
                      <div class="line" v-if="key === 'type'"></div>
                      <span v-if="key === 'type'" 
                        class="mb-icon icon"
                        :class="['icon-' + value.value ]" 
                        :title="value.value"></span>
                  </label>
              
                  <template v-if="value && value.component">
                    <component :is="value.component" v-model="value.value" :list="value.list" @change="change(key, value)"></component>
                  </template>
                </div>
              </div>
            </template>
          </AutoHeight>
      </div>
    </div>
  </div>
</template>

<script >
import { ref, shallowRef, onMounted, onUnmounted, watch } from "vue";
import AutoHeight from './transition/AutoHeight.vue';

export default {
  name: "Layout",
  emits: ['change'],
  components: { AutoHeight },
  props: {
    customStyle: {
      type: Object
    },
    modelValue: {
      require: true
    },
    mapIns: {
      type: Object
    },
    layerId: {
      type: Object
    }
  },
  setup(props, { emit }) {

    const inputLayout = shallowRef(props.modelValue);

    const activeNames = ref([]);

    const showMore = ref(false);

    const detail = ref(false);


    const change = (key, value) => {
      if(key && value) {
        if (props.mapIns) {
          try {
            props.mapIns.setLayoutProperty(props.layerId.value, key, value.value);
            emit('change');
          } catch(e) {
            console.error('e ==>', key, value, e);
          }
        }
      }
    }

    onMounted(() => {
    });

    onUnmounted(() => {
      
    })

    return {
      inputLayout,
      activeNames,
      showMore,
      detail,
      change
    };
  },
};
</script>

<style lang="scss" scoped>
@use '../style.scss';
.mp-layer-paint-layout-style {
  width: 100%;
  transition: max-height 0.3s ease-out;
  
  .mp-layer-paint-layout-content {
    width: calc(100% - 10px);
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: content-box;
    position: relative;
    padding: 2px 0px;
    display: flex;
    flex-direction: column;
    min-height: 27px;
    height: max-content;
    
    .tag {
      display: inline-block;
      position: absolute;
      bottom: 0px;
      right: 0px;
      font-size: 12px;
      color: #ccc;
      background:  rgb(18, 57, 187);
      border-bottom-right-radius: 4px;
      padding: 1px 2px;
      transform-origin: bottom right;
      transform: scale(0.6);
    }
  }

  .mp-layer-paint-other-content {
    position: relative;
  }
 
  .mp-key-value {
    margin-left: 10px;
    min-height: 32px;
    display: flex;
    column-gap: 5px;
    margin-top: 3px;
    width: calc(100% - 10px);
    label {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      background: #ccc;
      height: 32px;
      line-height: 32px;
      padding-left:10px;
      padding-right:5px;
      min-width: 60px;
      border-top-left-radius: 5px;
      border-bottom-left-radius: 5px;
      .icon {
        font-size: 14px;
      }

      .line {
        height: 32px;
        width: 2px;
        background: #fff;
      }
    }
  }
  .mp-key-value:last-child {
    margin-bottom: 3px;
  }
}

.brief {
  width: 95%;
  border-radius: 5px;
  padding: 0px 5px;
  display: flex;
  column-gap: 5px;
  row-gap: 5px;
  align-items: center;
  flex-wrap: wrap;
  .item {
    background: #ccc;
    line-height: 28px;
    padding: 0 5px;
    border-radius: 2px;
    font-size: 12px;
    min-height: 28px;
  }
  .item:first-child {
    margin-left: 5px;
  }
}

.icon {
  position: absolute;
  top: -10px;
  right: 1px;
  cursor: pointer;
  font-size: 12px;
  z-index: 2;
}

.icon:hover {
  color:rgb(40, 119, 221);
}

// .transition-height {
//       max-height: 0;
//       overflow: hidden;
//       transition: max-height 0.5s ease-out;
// }
// .open {
//   max-height: 100%;
// }

</style>
