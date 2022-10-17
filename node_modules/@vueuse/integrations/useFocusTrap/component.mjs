import { defineComponent, ref, watch, onScopeDispose, h } from 'vue-demi';
import { createFocusTrap } from 'focus-trap';
import { unrefElement } from '@vueuse/core';

const UseFocusTrap = defineComponent({
  name: "UseFocusTrap",
  props: ["as"],
  setup(props, { slots }) {
    let trap;
    const target = ref();
    const activate = () => trap && trap.activate();
    const deactivate = () => trap && trap.deactivate();
    watch(() => unrefElement(target), (el) => {
      if (!el)
        return;
      trap = createFocusTrap(el, {});
      activate();
    }, { flush: "post" });
    onScopeDispose(() => deactivate());
    return () => {
      if (slots.default)
        return h(props.as || "div", { ref: target }, slots.default());
    };
  }
});

export { UseFocusTrap };
