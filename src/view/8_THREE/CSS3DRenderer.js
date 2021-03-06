THREE.CSS3DObject = function(e) {
	THREE.Object3D.call(this), this.element = e, this.element.style.position = "absolute", this.addEventListener("removed", function(e) {
		if (null !== this.element.parentNode) {
			this.element.parentNode.removeChild(this.element);
			for (var t = 0, i = this.children.length; i > t; t++) this.children[t].dispatchEvent(e)
		}
	})
}, THREE.CSS3DObject.prototype = Object.create(THREE.Object3D.prototype), THREE.CSS3DSprite = function(e) {
	THREE.CSS3DObject.call(this, e)
}, THREE.CSS3DSprite.prototype = Object.create(THREE.CSS3DObject.prototype), THREE.CSS3DRenderer = function() {
	console.log("THREE.CSS3DRenderer", THREE.REVISION);
	var e, t, i, r, n = new THREE.Matrix4,
		o = document.createElement("div");
	o.style.overflow = "hidden", o.style.WebkitTransformStyle = "preserve-3d", o.style.MozTransformStyle = "preserve-3d", o.style.oTransformStyle = "preserve-3d", o.style.transformStyle = "preserve-3d", this.domElement = o;
	var a = document.createElement("div");
	a.style.WebkitTransformStyle = "preserve-3d", a.style.MozTransformStyle = "preserve-3d", a.style.oTransformStyle = "preserve-3d", a.style.transformStyle = "preserve-3d", o.appendChild(a), this.setClearColor = function() {}, this.setSize = function(n, s) {
		e = n, t = s, i = e / 2, r = t / 2, o.style.width = n + "px", o.style.height = s + "px", a.style.width = n + "px", a.style.height = s + "px"
	};
	var s = function(e) {
			return Math.abs(e) < 1e-6 ? 0 : e
		},
		l = function(e) {
			var t = e.elements;
			return "matrix3d(" + s(t[0]) + "," + s(-t[1]) + "," + s(t[2]) + "," + s(t[3]) + "," + s(t[4]) + "," + s(-t[5]) + "," + s(t[6]) + "," + s(t[7]) + "," + s(t[8]) + "," + s(-t[9]) + "," + s(t[10]) + "," + s(t[11]) + "," + s(t[12]) + "," + s(-t[13]) + "," + s(t[14]) + "," + s(t[15]) + ")"
		},
		h = function(e) {
			var t = e.elements;
			return "translate3d(-50%,-50%,0) matrix3d(" + s(t[0]) + "," + s(t[1]) + "," + s(t[2]) + "," + s(t[3]) + "," + s(-t[4]) + "," + s(-t[5]) + "," + s(-t[6]) + "," + s(-t[7]) + "," + s(t[8]) + "," + s(t[9]) + "," + s(t[10]) + "," + s(t[11]) + "," + s(t[12]) + "," + s(t[13]) + "," + s(t[14]) + "," + s(t[15]) + ")"
		},
		c = function(e, t) {
			if (e instanceof THREE.CSS3DObject) {
				var i;
				e instanceof THREE.CSS3DSprite ? (n.copy(t.matrixWorldInverse), n.transpose(), n.copyPosition(e.matrixWorld), n.scale(e.scale), n.elements[3] = 0, n.elements[7] = 0, n.elements[11] = 0, n.elements[15] = 1, i = h(n)) : i = h(e.matrixWorld);
				var r = e.element;
				r.style.WebkitTransform = i, r.style.MozTransform = i, r.style.oTransform = i, r.style.transform = i, r.parentNode !== a && a.appendChild(r)
			}
			for (var o = 0, s = e.children.length; s > o; o++) c(e.children[o], t)
		};
	this.render = function(e, n) {
		var s = .5 / Math.tan(THREE.Math.degToRad(.5 * n.fov)) * t;
		o.style.WebkitPerspective = s + "px", o.style.MozPerspective = s + "px", o.style.oPerspective = s + "px", o.style.perspective = s + "px", e.updateMatrixWorld(), void 0 === n.parent && n.updateMatrixWorld(), n.matrixWorldInverse.getInverse(n.matrixWorld);
		var h = "translate3d(0,0," + s + "px)" + l(n.matrixWorldInverse) + " translate3d(" + i + "px," + r + "px, 0)";
		a.style.WebkitTransform = h, a.style.MozTransform = h, a.style.oTransform = h, a.style.transform = h, c(e, n)
	}
};