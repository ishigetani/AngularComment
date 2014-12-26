<?php
class AddAuthor extends CakeMigration {

/**
 * Migration description
 *
 * @var string
 */
	public $description = 'addAuthor';

/**
 * Actions to be performed
 *
 * @var array $migration
 */
	public $migration = array(
		'up' => array(
			'create_field' => array(
				'comments' => array(
					'author' => array('type' => 'string', 'null' => false, 'default' => null, 'collate' => 'latin1_swedish_ci', 'charset' => 'latin1', 'after' => 'text'),
				),
			),
		),
		'down' => array(
			'drop_field' => array(
				'comments' => array('author'),
			),
		),
	);

/**
 * Before migration callback
 *
 * @param string $direction Direction of migration process (up or down)
 * @return bool Should process continue
 */
	public function before($direction) {
		return true;
	}

/**
 * After migration callback
 *
 * @param string $direction Direction of migration process (up or down)
 * @return bool Should process continue
 */
	public function after($direction) {
		return true;
	}
}
