import CMS from 'netlify-cms';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import BlogPostPreview from './preview-templates/BlogPostPreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import MusicPagePreview from './preview-templates/MusicPagePreview';
import ConnectPagePreview from './preview-templates/ConnectPagePreview';
import HealingSessionsPagePreview from './preview-templates/HealingSessionsPagePreview';
import DisclaimerPagePreview from './preview-templates/DisclaimerPagePreview';

CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('products', ProductPagePreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
CMS.registerPreviewTemplate('music', MusicPagePreview);
CMS.registerPreviewTemplate('connect', ConnectPagePreview);
CMS.registerPreviewTemplate('healing-sessions', HealingSessionsPagePreview);
CMS.registerPreviewTemplate('disclaimer', DisclaimerPagePreview);

