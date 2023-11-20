<template>
  <div class="col-md-9 block">
    <div class="big-header-text">
      Inventory
    </div>

    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3" style="margin-top: 56px">
          <div class="row justify-content-center">
            <div class="inventory-craft-btn" @click="isInCraft = true">Craft</div>
          </div>
        </div>

        <div class="col-lg-9">
          <div class="inventory-categories">
            <div
                class="inventory-category-btn"
                :class="{ active:(currentCategory === 1) }"
                v-on:click="changeInventoryCategory(1)"
            >Items</div>

            <div class ="need-border">
            </div>

            <div
                class="inventory-category-btn"
                :class="{ active:(currentCategory === 2) }"
                v-on:click="changeInventoryCategory(2)"
            >Resources</div>

            <div class ="need-border">
            </div>

            <div
                class="inventory-category-btn"
                :class="{ active:(currentCategory === 3) }"
                v-on:click="changeInventoryCategory(3)"
            >Other</div>
          </div>

          <div
              v-bind:style="{ cursor: currentApplyItem.img && 'url(' + currentApplyItem.img + '), auto' }"
          >
            <div
                class="inventory-slot"
                v-for="index in range(SlotType.LAST_SLOT + 1, inventory.slots + SlotType.LAST_SLOT)"
                v-bind:key="index"
                @drop="onDrop($event, index, SlotType.DEFAULT)"
                @dragover.prevent
                @dragenter="onDragEnter($event)"
                @dragleave="onDragLeave($event)"
                @click="currentApplyItem.slot && onClick($event, index)"
            >
                <div
                    v-for="item in inventory.items.filter(x => x.slot === index && x.filters.category === currentCategory)"
                    v-bind:key="item.slot"
                    draggable="true"
                    @dragstart="!this.currentApplyItem.slot && onDragStart($event, item)"
                    @dragend="onDragEnd($event)"
                    @contextmenu.prevent.stop="onContextMenu($event, item)"
                    class="inventory-item"
                >
                    <ItemInfo
                      :item="item"
                      :is-auction="false"
                    >
                      <img alt="" :src="item.img">
                        <span v-bind:key="item.slot"
                              v-if="getInfoText(item).indexOf('+') !== -1"
                              class="info-upper">{{getInfoText(item)}}</span>
                        <span v-if="item.amount > 1">{{ getInfoText(item) }}</span>
                    </ItemInfo>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <vue-simple-context-menu
      :options="currentInteractions"
      ref="inventoryContextMenu"
      element-id="inventoryContextMenu"
      @optionClicked="onContextClicked"
  >
  </vue-simple-context-menu>
</template>

<script>
import DeleteDecisionModal from "@/components/DeleteDecisionModal";
import {notify} from "@kyvg/vue3-notification";

const HOVER_COLOR = '#dd6464'

export default {
  name: "InventoryView",
  components: {
    DeleteDecisionModal
  },
  data() {
    return {
      inventory: this.$store.state.inventory,

      currentCategory: 1,

      currentInteractions: [],

      isInUpgrade: false,
      isInSell: false,
      isInCraft: false,
      isInDeleteDecision: false,
      currentHoldingItem: {}, // current item for modal actions
      currentApplyItem: {}, // current item for apply action
    }
  }
}

</script>

<style scoped>
  .inventory-slot {
    width: 96px;
    height: 96px;

    float: left;
    position: relative;

    margin-right: 1px;
    margin-top: 1px;

    border: 2px solid #7ca4c8;

    user-select: none;
    -webkit-user-select: none;

    box-sizing: border-box;
  }

  .inventory-item {
    width: 92px;
    height: 92px;

    position: absolute;
    top: 0;
    left: 0.25rem;
  }

  .inventory-slot img {
    width: 92px;
    height: 92px;
  }

  .inventory-item span {
    color: white;

    position: absolute;

    bottom: 0;
    right: 0.25rem;

    font-weight: bold;

    text-shadow: -1px -1px 1px #000;
  }

  .inventory-item .info-upper {
    top: 0;
  }

  .inventory-categories {
    width: 90%;
    max-height: 64px;
    display: flex;
    justify-content: center;
    margin-bottom: 8px;
  }

  .inventory-category-btn {
    font-size: 32px;
  }

  .inventory-craft-btn {
    font-size: 64px;
  }

  .inventory-category-btn, .inventory-craft-btn {
    font-family: AncientModernTales, serif;

    background: -webkit-linear-gradient(#7ca4c8, #1e2c3d);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    padding-left: 16px;
    padding-right: 16px;
    cursor: pointer;
    user-select: none;
    touch-action: manipulation;
    transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
  }

  .inventory-category-btn:hover, .inventory-craft-btn:hover, .inventory-category-btn.active {
    background: -webkit-linear-gradient(#dd6464, #630303);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transform: scale(.96);
  }

  .inventory-category-btn:focus-visible, .inventory-craft-btn:focus-visible {
    box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
    transition: box-shadow .2s;
  }

  .inventory-category-btn:disabled, .inventory-craft-btn:disabled {
    cursor: not-allowed;
    opacity: 1;
  }

  .need-border {
    border-right: 4px solid rgb(127, 127, 127);
  }

  .need-margin {
    margin-right: 1px;
  }

</style>
