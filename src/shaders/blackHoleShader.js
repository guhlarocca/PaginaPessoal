import * as THREE from 'three';

export function createBlackHoleShader() {
    return {
        glslVersion: 'three-tn',
        side: 'double',
        blending: 'additive',
        depthWrite: false,
        depthTest: false,
        transparent: true,
        uniforms: {
            uTime: { value: 0 },
            uNoiseTexture: { value: null },
            uInnerColor: { value: new THREE.Color("#ff8080") },
            uOuterColor: { value: new THREE.Color("#3633ff") }
        },
        vertexShader: `
            in vec2 uv;
            out vec2 vUv;
            void main() {
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                vUv = uv;
            }
        `,
        fragmentShader: `
            precision highp float;
            precision highp int;

            uniform float uTime;
            uniform sampler2D uNoiseTexture;
            uniform vec3 uInnerColor;
            uniform vec3 uOuterColor;

            in vec2 vUv;
            layout(location = 0) out vec4 pc_FragColor;

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
                float radius = 3.0; // Ajustado para 3.0 (era 5.0)

                for(float i = 0.0; i < iterations; i++) {
                    float progress = i / (iterations - 1.0);

                    float intensity = 1.0 - ((vUv.y - progress) * iterations) * 0.5;
                    intensity = smoothstep(0.0, 1.0, intensity);

                    vec2 uv = vUv;
                    uv.y *= radius; // Usando o novo radius
                    uv.x += uTime / ((i * 10.0) + 1.0);

                    vec3 ringColor = mix(uInnerColor, uOuterColor, progress);
                    float noiseIntensity = texture(uNoiseTexture, uv).r;
                    ringColor = mix(vec3(0.0), ringColor.rgb, noiseIntensity * intensity);

                    color.rgb = blendAdd(color.rgb, ringColor);
                }

                float edgesAttenuation = min(inverseLerp(vUv.y, 0.0, 0.02), inverseLerp(vUv.y, 1.0, 0.5));
                color.rgb = mix(vec3(0.0), color.rgb, edgesAttenuation);

                pc_FragColor = color;
            }
        `
    };
}
