# Time Value of Money (TVM) Calculator

<iframe id="tvm-frame" src="../tvm-calculator-app.html" width="100%" frameborder="0" scrolling="no" style="border-radius: 12px; border: 1px solid #e2e8f0; min-height: 800px; display: block; width: 100%; transition: height 0.3s ease;"></iframe>

<script>
    const iframe = document.getElementById('tvm-frame');
    iframe.onload = function() {
        // 使用 iframeMessage API 来由内部抛出真实内容高度
        // 由于是同一个域名下的 iframe，我们可以直接读取内部真实占用的滚动高度
        const adjustHeight = () => {
            if (iframe.contentWindow.document.body) {
                // 读取内部 root 元素的 scrollHeight 以替代整个 document，防止被之前的 iframe 高度撑大
                const contentHeight = iframe.contentWindow.document.documentElement.scrollHeight;
                iframe.style.height = contentHeight + 'px';
            }
        };

        // 延迟一下确保内部图表渲染完毕
        setTimeout(adjustHeight, 200);

        // 仅在浏览器窗口变化时触发一次
        window.addEventListener('resize', () => {
             // 先重置成 auto 或者较小值，这样才能测出缩小时的新真实高度
             iframe.style.height = '800px'; 
             setTimeout(adjustHeight, 100);
        });
    };
</script>
