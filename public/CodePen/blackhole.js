import * as THREE from 'three';

const vertexShader = `
    varying vec2 vUv;
    
    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vUv = uv;
    }
`;

const fragmentShader = `
    uniform float uTime;
    uniform sampler2D uNoiseTexture;
    uniform vec3 uInnerColor;
    uniform vec3 uOuterColor;

    varying vec2 vUv;

    float inverseLerp(float v, float minValue, float maxValue) {
        return (v - minValue) / (maxValue - minValue);
    }

    float remap(float v, float inMin, float inMax, float outMin, float outMax) {
        float t = inverseLerp(v, inMin, inMax);
        return mix(outMin, outMax, t);
    }

    float blendAdd(float base, float blend) {
        return min(base + blend, 1.0);
    }

    vec3 blendAdd(vec3 base, vec3 blend) {
        return min(base + blend, vec3(1.0));
    }

    vec3 blendAdd(vec3 base, vec3 blend, float opacity) {
        return (blendAdd(base, blend) * opacity + base * (1.0 - opacity));
    }

    void main() {
        vec4 color = vec4(0.0);
        color.a = 1.0;

        float iterations = 3.0;
        float radius = 1.0;

        for(float i = 0.0; i < iterations; i++) {
            float progress = i / (iterations - 1.0);

            float intensity = 1.0 - ((vUv.y - progress) * iterations) * 0.5;
            intensity = smoothstep(0.0, 1.0, intensity);

            vec2 uv = vUv;
            uv.y *= radius;
            uv.x += uTime / ((i * 10.0) + 1.0);

            vec3 ringColor = mix(uInnerColor, uOuterColor, progress);
            float noiseIntensity = texture2D(uNoiseTexture, uv).r;
            ringColor = mix(vec3(0.0), ringColor.rgb, noiseIntensity * intensity);

            color.rgb = blendAdd(color.rgb, ringColor);
        }

        float edgesAttenuation = min(inverseLerp(vUv.y, 0.0, 0.02), inverseLerp(vUv.y, 1.0, 0.5));
        color.rgb = mix(vec3(0.0), color.rgb, edgesAttenuation);

        gl_FragColor = color;
    }
`;

export function createBlackHoleShader() {
    return {
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        depthTest: false,
        transparent: true,
        uniforms: {
            uTime: { value: 0 },
            uNoiseTexture: { value: null },
            uInnerColor: { value: new THREE.Color("#ff8080") },
            uOuterColor: { value: new THREE.Color("#3633ff") }
        },
        vertexShader,
        fragmentShader
    };
}
