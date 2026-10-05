export default {
    mounted(el, binding) {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
        el.style.opacity = '0'
        el.style.transform = 'translateY(28px)'
        el.style.transition = `opacity .7s ease ${binding.value || 0}ms, transform .7s ease ${binding.value || 0}ms`
        const io = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                el.style.opacity = '1'
                el.style.transform = 'none'
                io.disconnect()
            }
        }, {threshold: 0.15})
        io.observe(el)
    }
}