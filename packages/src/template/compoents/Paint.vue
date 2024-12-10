<template>
  <div class="mp-layer-paint-layout-style" :style="customStyle">
      <div class="mp-layer-paint-layout-content transition-height" :class="{open: isTransition}" @transitionend="detail = !detail ">
        <span class="tag">paint</span>
        <span class="mb-icon icon" :class="{'icon-view-min': !detail, 'icon-view-max': detail}" @click="isTransition = !isTransition"></span>
        
        <div class="brief" v-if="!isTransition && !detail">
          <div class="item" v-for="(value, key, index) in inputPaint" :key="index">
            {{ key }}:{{value.value }}
          </div>
        </div>
      
          <div class="mp-kv-wrap">
            <div class="mp-key-value" v-for="(value, key, index) in inputPaint" :key="index">
              <label for="">
                  <span>{{key}}</span>
              </label>
          
              <template v-if="value.component">
                <component :is="value.component" v-model="value.value" :list="value.list"></component>
              </template>
            </div>
          </div>
      </div>

  </div>
</template>

<script >
import { ref, onMounted, onUnmounted, watch, shallowRef } from "vue";

export default {
  name: "Paint",
  components: {},
  props: {
    customStyle: {
      type: Object
    },
    modelValue: {
      type: Object,
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

    const inputPaint = ref(props.modelValue);

    const activeNames = ref([]);

    const detail = ref(false);

    const isTransition = ref(false);

    watch(() => inputPaint, (val) => {
      setPaintProperty(val.value);
    }, {deep: true})

    const setPaintProperty = (data) => {
      Object.entries(data).forEach(([key, value]) => {
        if (props.mapIns) {
          props.mapIns.setPaintProperty(props.layerId.value, key, value.value);
        }
      })
    }

    onMounted(() => {
    });

    onUnmounted(() => {
      
    })

    return {
      inputPaint,
      activeNames,
      detail,
      isTransition
    };
  },
};
</script>

<style lang="scss" scoped>

.mp-layer-paint-layout-style {
  width: -webkit-fill-available;
  margin: 0 10px 10px 0px;
  max-height: 1000px;
  transition: max-height 0.3s ease-out;

  

  
  .mp-layer-paint-layout-content {
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: content-box;
    position: relative;
    padding: 2px 0px;
    display: flex;
    flex-direction: column;
    min-height: 27px;
    
    .tag {
      display: inline-block;
      position: absolute;
      bottom: 0px;
      right: 0px;
      font-size: 12px;
      color: #ccc;
      background:  linear-gradient( 89.7deg, rgba(223,0,0,1) 2.7%, rgba(214,91,0,1) 15.1%, rgba(233,245,0,1) 29.5%, rgba(23,255,17,1) 45.8%, rgba(29,255,255,1) 61.5%, rgba(5,17,255,1) 76.4%, rgba(202,0,253,1) 92.4% );
      border-bottom-right-radius: 4px;
      padding: 1px 2px;
      transform-origin: bottom right;
      transform: scale(0.6);
    }
  }
 
  .mp-key-value {
    margin-left: 10px;
    height: 32px;
    display: flex;
    column-gap: 5px;
    margin-top: 3px;
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
    height: 28px;
    line-height: 28px;
    padding: 0 5px;
    border-radius: 2px;
    font-size: 12px;
    width: max-content;
    flex-shrink: 1;
  }
  .item:first-child {
    margin-left: 5px;
  }
}

.icon {
  position: absolute;
  top: -4px;
  right: 1px;
  cursor: pointer;
  font-size: 12px;
}

.icon:hover {
  color:rgb(40, 119, 221);
}

.transition-height {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s ease-out;
}
.open {
  max-height: 100%;
}

</style>
