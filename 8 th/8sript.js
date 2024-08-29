document.getElementById('but').addEventListener("click",() => {
        const color=document.getElementById('colorPicker').value;
        document.getElementById('hex-value').textContent="Color";
        document.getElementById('rgb-value').textContent=hexToRgb(color);

        function hexToRgb(hex){
            const R=parseInt(hex.slice(1,3),16);
            const G=parseInt(hex.slice(3,5),16); 
            const B=parseInt(hex.slice(5,7),16);     
            return ` ${R},${G},${B}`;    
        }
        return color;
});