<template>
  <fab
    :position="position"
    :icon-size="iconSizes"
    :position-type="positionType"
    :bg-color="colors"
    :main-icon="mainIcon"
    :main-tooltip="mainTooltip"
    :actions="[{name: 'alertMe',icon: firstIcon, tooltip: firstTooltip, color:'#d11014'},{name: 'alertMe',icon: secondIcon, tooltip: secondTooltip}]"
    @alertMe="alert"
    :fixed-tooltip="fixedTooltip"
    :enable-rotation="enableRotation"
  ></fab>
</template>
<script>
import FAB from 'vue-fab'
export default {
    name: 'fabbutton',
    components: {
            fab: FAB
        },
        data() {
            return {
                positions: [
                    'bottom-right',
                    'bottom-left',
                    'top-right',
                    'top-left'
                ],
                positionTypes: [
                    'fixed',
                    'absolute'
                ],
                tooltipEvents: [
                    'hover',
                    'fixed'
                ],
                sizes: [
                    'small',
                    'medium',
                    'large'
                ],
                position: 'bottom-right',
                positionType: 'fixed',
                tooltipEvent: 'hover',
                iconSizes: 'small',
                colors: '#3fb0ac',
                mainIcon: 'add',
                mainTooltip: 'Hello',
                firstIcon: 'cached',
                firstTooltip: 'cached',
                secondIcon: 'add_alert',
                secondTooltip: 'add_alert',
                enableRotation: true
            }
        },
        computed: {
            fixedTooltip() {
                return this.tooltipEvent === 'fixed'
            }
        },
        methods: {
            alert() {
                alert('You have clicked me :)')
            }
        }
    }
</script>