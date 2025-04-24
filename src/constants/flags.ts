import { GenerationTypes } from '../models/generationTypes';

const COMPONENT_FLAGS = [
    ['--display-block', 'Applies display: block to the host element'],
    ['--export', 'Automatically export the component from the specified NgModule'],
    ['--export-default', 'Use a default export for the component'],
    ['--flat', 'Creates the component without its own folder'],
    ['--inline-style', 'Includes styles inline in the component.ts file'],
    ['--inline-template', 'Includes template inline in the component.ts file'],
    ['--skip-import', 'Do not automatically import the new component into its closest NgModule'],
    ['--skip-selector', 'Skip the generation of an HTML selector for the component'],
    ['--skip-tests', 'Skip the generation of unit test files spec.ts'],
    ['--standalone', 'Generate a standalone component'],
];

const SERVICE_FLAGS = [
    ['--flat', 'Creates files at the top level of the project or the given path'],
    ['--skip-tests', 'Skip the generation of unit test files spec.ts'],
];

const DIRECTIVE_FLAGS = [
    ['--export', 'Automatically export the directive from the specified NgModule'],
    ['--flat', 'Creates the directive without its own folder'],
    ['--skip-import', 'Do not automatically import the new directive into its closest NgModule'],
    ['--skip-tests', 'Skip the generation of unit test files spec.ts'],
    ['--standalone', 'Generate a standalone directive'],
];

const PIPE_FLAGS = [
    ['--export', 'Automatically export the pipe from the specified NgModule'],
    ['--flat', 'Creates the pipe without its own folder'],
    ['--skip-import', 'Do not automatically import the new pipe into its closest NgModule'],
    ['--skip-tests', 'Skip the generation of unit test files spec.ts'],
    ['--standalone', 'Generate a standalone pipe'],
];

const GUARD_FLAGS = [
    ['--flat', 'Creates without its own folder'],
    ['--skip-tests', 'Skip the generation of unit test files spec.ts'],
    ['--functional', 'Generate the guard as a function instead of a class'],
];

const INTERCEPTOR_FLAGS = [
    ['--flat', 'Creates without its own folder'],
    ['--skip-tests', 'Skip the generation of unit test files spec.ts'],
    ['--functional', 'Generate the interceptor as a function HttpInterceptorFn instead of a class'],
];

const MODULE_FLAGS = [
    ['--flat', 'Creates without its own folder'],
    ['--routing', 'Generates a routing module'],
];

const RESOLVER_FLAGS = [
    ['--flat', 'Creates without its own folder'],
    ['--skip-tests', 'Skip the generation of unit test files spec.ts'],
    ['--functional', 'Generate the resolver as a function instead of a class']
];

export function getFlags(type: GenerationTypes): string[][] {
    switch (type) {
        case GenerationTypes.Component:
            return COMPONENT_FLAGS;
        case GenerationTypes.Service:
            return SERVICE_FLAGS;
        case GenerationTypes.Directive:
            return DIRECTIVE_FLAGS;
        case GenerationTypes.Pipe:
            return PIPE_FLAGS;
        case GenerationTypes.Guard:
            return GUARD_FLAGS;
        case GenerationTypes.Interceptor:
            return INTERCEPTOR_FLAGS;
        case GenerationTypes.Module:
            return MODULE_FLAGS;
        case GenerationTypes.Resolver:
            return RESOLVER_FLAGS;
        default:
            return [];
    }
}