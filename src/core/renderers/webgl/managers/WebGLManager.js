/**
 * @class
 * @memberof PIXI
 */
export default class WebGLManager
{
    /**
     * @param {PIXI.WebGLRenderer} renderer - The renderer this manager works for.
     */
    constructor(renderer)
    {
        /**
         * The renderer this manager works for.
         *
         * @member {PIXI.WebGLRenderer}
         */
        this.renderer = renderer;

        this.renderer.runners.contextChange.add(this);
    }

    /**
     * Generic method called when there is a WebGL context change.
     *
     */
    contextChange()
    {
        // do some codes init!
    }

    /**
     * Generic destroy methods to be overridden by the subclass
     *
     */
    destroy()
    {
        this.renderer.runners.contextChange.remove(this);
        this.renderer = null;
    }
}
