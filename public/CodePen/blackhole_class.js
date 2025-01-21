import { TorusGeometry as ho, Points as co, BufferGeometry as ct, BufferAttribute as Xe, PlaneGeometry as Gn, Mesh as Qe, Vector3 as P, Color as de } from 'three';
import { Experience as Zt } from './Experience.js';
import { NoiseTexture as br } from './NoiseTexture.js';
import { BlackHoleMaterial as H_ } from './BlackHoleMaterial.js';
import { ParticlesMaterial as X_ } from './ParticlesMaterial.js';
import { DistortionMaterial as Y_ } from './DistortionMaterial.js';
import { MaskMaterial as J_ } from './MaskMaterial.js';

export class BlackHole {
    constructor() {
        this.experience = new Zt();
        this.config = this.experience.config;
        this.scenes = this.experience.scenes;
        this.time = this.experience.time;
        this.debug = this.experience.debug;
        this.sizes = this.experience.sizes;
        this.camera = this.experience.camera;
        this.renderer = this.experience.renderer;
        this.noises = new br();

        this.setCommonUniforms();
        this.setParticles();
        this.setDisc();
        this.setDistortion();
    }

    setCommonUniforms() {
        this.commonUniforms = {};
        this.commonUniforms.uInnerColor = { value: new de("#ff8080") };
        this.commonUniforms.uOuterColor = { value: new de("#3633ff") };

        if(this.debug.active) {
            const folder = this.debug.ui.getFolder("blackhole");
            folder.addColor(this.commonUniforms.uInnerColor, "value");
            folder.addColor(this.commonUniforms.uOuterColor, "value");
        }
    }

    setDisc() {
        this.disc = {};
        // Diminuído o raio do disco de 5 para 3
        this.disc.geometry = new ho(3, 1, 0, 64, 10, true);
        this.disc.noiseTexture = this.noises.create(128, 128);
        this.disc.material = new H_();
        this.disc.material.uniforms.uNoiseTexture.value = this.disc.noiseTexture;
        this.disc.material.uniforms.uInnerColor = this.commonUniforms.uInnerColor;
        this.disc.material.uniforms.uOuterColor = this.commonUniforms.uOuterColor;
        this.disc.mesh = new Qe(this.disc.geometry, this.disc.material);
        this.scenes.space.add(this.disc.mesh);
    }

    setParticles() {
        this.particles = {};
        this.particles.count = 50000;

        const positions = new Float32Array(this.particles.count);
        const sizes = new Float32Array(this.particles.count);
        const randoms = new Float32Array(this.particles.count);

        for(let i = 0; i < this.particles.count; i++) {
            positions[i] = Math.random();
            sizes[i] = Math.random();
            randoms[i] = Math.random();
        }

        this.particles.geometry = new ct();
        this.particles.geometry.setAttribute('position', new Xe(positions, 1));
        this.particles.geometry.setAttribute('aSize', new Xe(sizes, 1));
        this.particles.geometry.setAttribute('aRandom', new Xe(randoms, 1));

        this.particles.material = new X_();
        this.particles.material.uniforms.uViewHeight.value = this.renderer.composition.space.height;
        this.particles.material.uniforms.uInnerColor = this.commonUniforms.uInnerColor;
        this.particles.material.uniforms.uOuterColor = this.commonUniforms.uOuterColor;

        this.particles.points = new co(this.particles.geometry, this.particles.material);
        this.particles.points.frustumCulled = false;

        this.scenes.space.add(this.particles.points);
    }

    setDistortion() {
        this.distortion = {};

        this.distortion.active = {};
        this.distortion.active.geometry = new Gn(1, 1);
        this.distortion.active.material = new Y_();
        this.distortion.active.mesh = new Qe(this.distortion.active.geometry, this.distortion.active.material);
        this.distortion.active.mesh.scale.set(10, 10, 10);
        this.scenes.distortion.add(this.distortion.active.mesh);

        this.distortion.mask = {};
        this.distortion.mask.geometry = new Gn(1, 1);
        this.distortion.mask.material = new J_();
        this.distortion.mask.mesh = new Qe(this.distortion.mask.geometry, this.distortion.mask.material);
        this.distortion.mask.mesh.scale.set(10, 10, 10);
        this.distortion.mask.mesh.rotation.x = Math.PI * 0.5;
        this.scenes.distortion.add(this.distortion.mask.mesh);
    }

    resize() {
        this.particles.material.uniforms.uViewHeight.value = this.sizes.height;
    }

    update() {
        const blackHolePosition = new P(0, 0, 0);
        blackHolePosition.project(this.camera.instance);
        blackHolePosition.x = blackHolePosition.x * 0.5 + 0.5;
        blackHolePosition.y = blackHolePosition.y * 0.5 + 0.5;

        this.disc.material.uniforms.uTime.value = this.time.elapsed;
        this.particles.material.uniforms.uTime.value = this.time.elapsed + 9999;

        this.distortion.active.mesh.lookAt(this.camera.instance.position);

        this.renderer.composition.final.material.uniforms.uBlackHolePosition.value.set(
            blackHolePosition.x,
            blackHolePosition.y
        );
    }
}
