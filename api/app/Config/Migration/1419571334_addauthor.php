<?php
class AddAuthor extends CakeMigration {

/**
 * Migration description
 *
 * @var string
 */
	public $description = 'addAuthor';

	public $records = array(
		'Comment' => array(
			array(
				'text' => 'test1',
				'author' => 'Tester'
			),
			array(
				'text' => 'test2',
				'author' => 'Tester'
			),
			array(
				'text' => 'test3',
				'author' => 'Tester'
			),
		)
	);

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
		if ($direction === 'up') {
			foreach ($this->records as $model => $records) {
				if (!$this->updateRecords($model, $records)) {
					return false;
				}
			}
		}
		return true;
	}

/**
 * Update model records
 *
 * @param string $model model name to update
 * @param string $records records to be stored
 * @param $scope
 * @return boolean Should process continue
 */
	public function updateRecords($model, $records, $scope = null) {
		$Model = $this->generateModel($model);
		foreach ($records as $record) {
			$Model->create();
			if (!$Model->save($record, false)) {
				return false;
			}
		}
		return true;
	}
}
