# Unit Converter

<iframe id="unit-converter-frame" src="../unit_converter.html" width="100%" frameborder="0" scrolling="no" style="border-radius: 12px; border: 1px solid #e2e8f0; min-height: 800px; display: block; width: 100%; transition: height 0.3s ease;"></iframe>

<script>
    const ucIframe = document.getElementById('unit-converter-frame');
    ucIframe.onload = function() {
        const adjustHeight = () => {
            if (ucIframe.contentWindow.document.body) {
                const contentHeight = ucIframe.contentWindow.document.documentElement.scrollHeight;
                ucIframe.style.height = contentHeight + 'px';
            }
        };

        setTimeout(adjustHeight, 200);

        window.addEventListener('resize', () => {
             ucIframe.style.height = '800px'; 
             setTimeout(adjustHeight, 100);
        });
    };
</script>
