import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoader } from './loaders/buildCssLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

    const {isDev} = options;
    
    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    }

    const babelLoader = buildBabelLoader(options);
    
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: {
            loader: 'ts-loader',
            options: {
                reportFiles: [
                    '**/*.{ts,tsx}',
                    '!**/node_modules/**',
                    '!**/*.d.ts'
                ]
            }
        },
        exclude: /node_modules/,
    }

    const cssLoaders = buildCssLoader(isDev)
    
    const fileLoader =  {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    }
        
    return [
        fileLoader,
        svgLoader,
        babelLoader,
        typescriptLoader,
        cssLoaders
        
    ]
}