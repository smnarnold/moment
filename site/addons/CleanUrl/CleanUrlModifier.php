<?php

namespace Statamic\Addons\CleanUrl;

use Statamic\Extend\Modifier;

class CleanUrlModifier extends Modifier
{
    /**
     * Modify a value
     *
     * @param mixed  $value    The value to be modified
     * @param array  $params   Any parameters used in the modifier
     * @param array  $context  Contextual values
     * @return mixed
     */
    public function index($value, $params, $context)
    {
        return parse_url($value, PHP_URL_HOST) . parse_url($value, PHP_URL_PATH);
    }
}
