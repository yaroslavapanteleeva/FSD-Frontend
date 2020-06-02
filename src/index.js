import 'normalize.css';

function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}

requireAll(require.context('../src/', true, /\.js$|\.scss$/));



