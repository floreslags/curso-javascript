const Component = (function(){
    // Component Constructor
    const Constructor = function(options){
        this.el = options.el;
        this.data = options.data;
        this.template = options.template;
    }

    // Métodos del Componente

    // UI Render
    Constructor.prototype.render = function (){
        const $el = document.querySelector(this.el);
        if(!$el) return;

        $el.innerHTML = this.template(this.data);

        console.log(this.data);
    }
    
    // Reactive State Update
    Constructor.prototype.setState = function (obj){
        // Validación de la estructura interna del componente
        for(let key in obj){
            if(this.data.hasOwnProperty(key)){
                this.data[key] = obj[key];
            }
        }
        this.render();
    }

    
    // Create Inmutable State
    Constructor.prototype.getState = function (){
        return JSON.parse(JSON.stringify(this.data));
    }
    
    return Constructor;
})();