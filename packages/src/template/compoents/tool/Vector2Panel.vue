<template>
    <div v-if="open">
        <div class="vector-2d-panel" @click.stop="()=>{}" ref="panelRef">
            <div class="offset">
                <div class="group">
                    <span>X offset</span>
                    <el-input v-model="input[0]" style="width: 45px" @input="change"></el-input>
                </div>
                <div class="group">
                    <span>Y offset</span>
                    <el-input v-model="input[1]" style="width: 45px" @input="change"></el-input>
                </div>
            </div>
            <canvas :id="id" class="panel" width="80" height="80"></canvas>
        </div>
    </div>
</template>
<script>
import { onMounted, onUnmounted, ref, watch } from "vue";
import { CopyDocument } from '@element-plus/icons-vue'
export default {
    name: 'Vector2E',
    components: { CopyDocument },
    emits: ['change', 'update:modelValue', 'update:open'],
    props: {
        modelValue: {
            type: Array,
            require: true
        },
        open: {
            type: Boolean,
            require: true
        }
    },
    setup (props, { emit }) {
        console.log('props.modelValue =>', props.modelValue);
        const input = ref(props.modelValue);
        const open = ref(props.open);
        const id = 'vector2d-' + Date.now();

        const panelRef = ref(null);

        const r = 6;
        const width  = 80;
        const height = 80;

        watch(() => props.modelValue, (val, old) => {
            if (val !== old) {
                input.value = val;
            }
        });


        watch(() => props.open, (val, old) => {
            if (val !== old) {
                open.value = val;
                if(open.value) {
                    setTimeout(() => {
                        initCanvas();
                    })
                }
            }
        });

        let canvas;
        let ctx;

        const drawGrid = () => {
            if (!ctx) return;

            ctx.translate(0.5, 0.5);
            ctx.beginPath();
            ctx.lineWidth = 0.5;                
            ctx.moveTo( width * 0.5, 0 );
            ctx.lineTo( width * 0.5, height );

            ctx.moveTo( 0, height * 0.5 );
            ctx.lineTo( width, height * 0.5 );
            ctx.strokeStyle = 'rgba(128, 128, 128, 0.6)';
            ctx.stroke();
            ctx.resetTransform();
        }

        const mouseup = (e) => {
            document.removeEventListener('mousemove', mousemove);
        }

        const mousemove = (e) => {
            if (!ctx) return;

            const clamp = (min, max, val) => Math.min(max, Math.max(val, min));

            const rect = canvas.getBoundingClientRect();
            const x = clamp(r, width - r,  e.clientX - rect.x);
            const y = clamp(r, height - r, e.clientY - rect.y);

            input.value[0] = Math.round(x - width * 0.5);
            input.value[1] = -Math.round(y - height * 0.5);

            emit('update:modelValue', input.value);

            ctx.clearRect(0, 0, width, height);

            drawGrid();

            ctx.translate(0.5, 0.5);
            ctx.beginPath();
            ctx.lineWidth = 2;
            ctx.moveTo( width * 0.5, height * 0.5 );
            ctx.lineTo( x, y );
            ctx.strokeStyle = 'rgba(128, 128, 128, 0.8)';
            ctx.stroke();
            ctx.resetTransform();
            ctx.closePath();

            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = '#2196f3';
            ctx.fill();
            ctx.closePath();
        }
        
        const mousedown = (e) => {
            console.log('mousedown =>', e);
            mousemove(e);
            document.addEventListener('mousemove', mousemove);
        }

        const globaleMousedown = (e) => {
            e.preventDefault();
            if(panelRef.value && !panelRef.value.contains(e.target)) {
                open.value = false;
                emit('update:open', open.value);
            }
        }

        const initCanvas = () => {
            canvas = document.querySelector('#'+id);
            ctx = canvas.getContext('2d')

            canvas.addEventListener('mousedown', mousedown)
            document.addEventListener('mouseup', mouseup)
            document.addEventListener('mousedown', globaleMousedown)

            drawGrid()
            change();
        }

        const change = () => {
            const rect = canvas.getBoundingClientRect();
            const clientX = rect.x + Number(input.value[0]) + width * 0.5;
            const clientY = rect.y - Number(input.value[1]) + height * 0.5;
            mousemove({ clientX: clientX, clientY: clientY });
        }

        onMounted(() => {
        })

        onUnmounted(() => {
            document.removeEventListener('mouseup', mouseup)
            document.removeEventListener('mousedown', globaleMousedown)
        })

        return {
            id,
            input,
            open,
            panelRef,
            change
        }
    }
}
</script>
<style scoped lang="scss">
.vector-2d-panel {
    position: fixed;
    transform: translate(-20px, -115%);
    // position: absolute;
    // bottom: 25px;
    // left: -5px;
    padding: 10px;
    border-radius: 2px;
    background: #fff;
    box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.65);
    user-select: none;
    display: flex;
    width: max-content;
    column-gap: 10px;
    .offset {
        display: flex;
        flex-direction: column;
        row-gap: 5px;

        .group {
            display: flex;
            align-items: center;
            column-gap: 5px;
            font-size: 12px;
            font-family: 'Courier New', Courier, monospace;
        }
    }

    canvas {
        border: 1px solid #9E9E9E;
        border-radius: 3px;
    }
}

.vector-2d-panel::after{
    content: '';
    display: block;
    position: absolute;
    bottom: -7px; /*向下偏移量是矩形边框宽度的1.4（根号2）倍，即8.4，top值为-26-（-8.4）*/
    left: 5px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #fff;
    // box-shadow: 2px 2px 15px 0px rgba(0, 0, 0, 0.65);
}

</style>