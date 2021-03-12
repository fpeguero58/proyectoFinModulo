export class Usuario {
    

    constructor(private _nombre:String,
        private _apellido:String,
        private _dni: String,
        private _localidad: String, 
        private _telefono:String,
        private _email:String,
         private _edad:String) {}

    /**
     * Getter nombre
     * @return {String}
     */
	public get nombre(): String {
		return this._nombre;
	}

    /**
     * Getter apellido
     * @return {String}
     */
	public get apellido(): String {
		return this._apellido;
	}

    /**
     * Getter dni
     * @return {String}
     */
	public get dni(): String {
		return this._dni;
	}

    /**
     * Getter localidad
     * @return {String}
     */
	public get localidad(): String {
		return this._localidad;
	}

    /**
     * Getter telefono
     * @return {String}
     */
	public get telefono(): String {
		return this._telefono;
	}

    /**
     * Getter email
     * @return {String}
     */
	public get email(): String {
		return this._email;
	}

    /**
     * Getter edad
     * @return {String}
     */
	public get edad(): String {
		return this._edad;
	}

    /**
     * Setter nombre
     * @param {String} value
     */
	public set nombre(value: String) {
		this._nombre = value;
	}

    /**
     * Setter apellido
     * @param {String} value
     */
	public set apellido(value: String) {
		this._apellido = value;
	}

    /**
     * Setter dni
     * @param {String} value
     */
	public set dni(value: String) {
		this._dni = value;
	}

    /**
     * Setter localidad
     * @param {String} value
     */
	public set localidad(value: String) {
		this._localidad = value;
	}

    /**
     * Setter telefono
     * @param {String} value
     */
	public set telefono(value: String) {
		this._telefono = value;
	}

    /**
     * Setter email
     * @param {String} value
     */
	public set email(value: String) {
		this._email = value;
	}

    /**
     * Setter edad
     * @param {String} value
     */
	public set edad(value: String) {
		this._edad = value;
	}
    
    

        
}